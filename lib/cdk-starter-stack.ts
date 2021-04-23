import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as cdk from '@aws-cdk/core';

// 👇 extend the StackProps interface
interface MyCdkStackProps extends cdk.StackProps {
  deploymentEnvironment: 'dev' | 'prod';
}

export class MyCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: MyCdkStackProps) {
    super(scope, id, props);

    // 👇 get the environment from props
    const {deploymentEnvironment} = props;
    const isProduction = deploymentEnvironment === 'prod';

    // 👇 conditionally set capacity based on environment
    new dynamodb.Table(this, 'my-table', {
      partitionKey: {name: 'todoId', type: dynamodb.AttributeType.NUMBER},
      billingMode: isProduction
        ? dynamodb.BillingMode.PAY_PER_REQUEST
        : dynamodb.BillingMode.PROVISIONED,
      writeCapacity: isProduction ? undefined : 1,
      readCapacity: isProduction ? undefined : 1,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}

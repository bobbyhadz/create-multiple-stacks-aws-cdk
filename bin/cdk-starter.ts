#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import {MyCdkStack} from '../lib/cdk-starter-stack';

const app = new cdk.App();

// 👇 instantiate dev stack
new MyCdkStack(app, 'my-stack-dev', {
  stackName: 'my-stack-dev',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
  deploymentEnvironment: 'dev',
});

// 👇 instantiate prod stack
new MyCdkStack(app, 'my-stack-prod', {
  stackName: 'my-stack-prod',
  env: {
    region: process.env.CDK_DEFAULT_REGION,
    account: process.env.CDK_DEFAULT_ACCOUNT,
  },
  deploymentEnvironment: 'prod',
});

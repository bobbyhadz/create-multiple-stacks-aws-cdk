# How to create multiple stacks and environments in a CDK App

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/aws-cdk-nested-stack)

> If you use CDK v1, switch to the cdk-v1 branch

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Create the CDK stack

```bash
npx aws-cdk deploy \
  my-stack-dev \
  my-stack-prod
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup

```bash
npx aws-cdk destroy \
  my-stack-dev \
  my-stack-prod
```

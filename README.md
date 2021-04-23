# How to create multiple stacks and environments in a CDK App

A repository for an article on
[bobbyhadz.com](https://bobbyhadz.com/blog/create-multiple-stacks-aws-cdk)

## How to Use

1. Clone the repository

2. Install the dependencies

```bash
npm install
```

3. Create the CDK stack

```bash
npx cdk deploy \
  my-stack-dev \
  my-stack-prod
```

4. Open the AWS CloudFormation Console and the stack should be created in your
   default region

5. Cleanup

```bash
npx cdk destroy \
  my-stack-dev \
  my-stack-prod
```

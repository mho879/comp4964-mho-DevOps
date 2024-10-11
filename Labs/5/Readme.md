###### Steps to deploy AWS EKS via AWS CLI #####
### Create IAM Role ###
```sh
aws iam create-role \
--role-name EKSClusterRole \
--assume-role-policy-document file://eks-trust-policy.json
```

### Attach necessary policies to IAM Role ###
```sh
aws iam attach-role-policy \
--role-name EKSClusterRole \
--policy-arn arn:aws:iam::aws:policy/AmazonEKSClusterPolicy

aws iam attach-role-policy \
--role-name EKSClusterRole \
--policy-arn arn:aws:iam::aws:policy/AmazonEKSServicePolicy
```

### Create EKS cluster ###
```sh
aws eks create-cluster \
--name comp4964-lab5-cluster \
--role-arn arn:aws:iam::471112786289:role/EKSClusterRole
```

######
### The above was tempted via CLI
######

###### Steps to deploy AWS EKS via eksctl #####

## Configure the cluster - create a .json or .yaml file
## 
```sh
eksctl create cluster -f cluster-config.yaml
```

## Set up external access to applications using AWS Load Balancer Controller (LBC) ##
```sh
export CLUSTER_REGION=us-west-2
export CLUSTER_VPC=$(aws eks describe-cluster --name web-quickstart --region $CLUSTER_REGION --query "cluster.resourcesVpcConfig.vpcId" --output text)
```

## Install AWS Load Balancer Controller (LBC) ##
```sh
helm repo add eks https://aws.github.io/eks-charts
helm repo update eks
helm install aws-load-balancer-controller eks/aws-load-balancer-controller \
--namespace kube-system \
--set clusterName=web-quickstart \
--set serviceAccount.create=false \
--set region=${CLUSTER_REGION} \
--set vpcId=${CLUSTER_VPC} \
--set serviceAccount.name=aws-load-balancer-controller
```

###### Deploying a game sample application #########
## Create a Kubernetes namespace called game-2048 with the --save-config flag
```sh
kubectl create namespace game-2048 --save-config
```

## Deploy the 2048 Game Sample Application
```sh
kubectl apply -n game-2048 -f https://raw.githubusercontent.com/kubernetes-sigs/aws-load-balancer-controller/v2.8.0/docs/examples/2048/2048_full.yaml
```

## Run following command to get the Ingress resource for the game-2048 namespace
### The address provided by the following command is the URL link for the game
```sh
kubectl get ingress -n game-2048
```

## Tear down ##
```sh
eksctl delete cluster -f ./cluster-config.yaml
```
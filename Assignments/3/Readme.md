##### Launching EC2 Instance via CLI #####

### Locate free-tier eligible Amazon Linux AMI ###
# --filters "Name=name,Values=amzn2-ami-hvm-*-x86_64-gp2": Looks for Amazon Linux 2 AMIs (HVM, general-purpose SSD) for x86_64 architecture.
```sh
aws ec2 describe-images \
--owners amazon \
--filters "Name=name,Values=amzn2-ami-hvm-*-x86_64-gp2" "Name=state,Values=available" \
--query "Images[].[ImageId,Name,CreationDate]" \
--output table

aws ec2 describe-images \
--owners amazon \
--filters "Name=name,Values=al2023-ami-minimal-*" \
            "Name=state,Values=available" \
            "Name=architecture,Values=x86_64" \
--query 'sort_by(Images, &CreationDate)[-1].[ImageId,Name,Description]' \
--region us-west-2
```

### Create 2 EC2 instance ###
```sh
aws ec2 run-instances \
--image-id ami-0ddfc826883537d3f \
--instance-type t2.micro \
--key-name mhoLab1Linux
```

### Retrieve instance id for instances ###
```sh
aws ec2 describe-instances | grep InstanceId
```
# ID = i-0317a0bf2bb6f79cd


### Apply name tag ###
```sh
aws ec2 create-tags \
--resources i-0317a0bf2bb6f79cd \
--tags Key=Name,Value=comp4968-mho-a3
```

### Retrieve security group id that allows SSH connection to apply to instance ###
```sh
aws ec2 describe-security-groups --group-name launch-wizard-10 | grep GroupId
# sg-022789db46c39456f
```

### Apply security group to instance ###
```sh
aws ec2 modify-instance-attribute --instance-id i-0317a0bf2bb6f79cd --groups sg-022789db46c39456f
```

### SSH into instance ###
```sh
ssh -i "mhoLab1Linux.pem" ec2-user@ec2-18-237-225-219.us-west-2.compute.amazonaws.com
```

<!-- EC2 Launch and Connect ends here -->
<!-- ==================================================================================== -->


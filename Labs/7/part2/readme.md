##### Following Tutorial on AWS for using CodeBuild and CodePipeline #####
# https://aws.amazon.com/getting-started/hands-on/create-continuous-delivery-pipeline/ ##

### Step 1 Set up Git Repo ###

### Step 2 Deploy Web App via AWS using something like Elastic Beanstalk ###
    - just a simple deploy to make sure it connects; no connection to the code yet needed

### Step 3 Create a Build Project using Code Build ###

    1. Connect github and provide git repo for the source (connect using oAuth)
    2. Determine environment type (OS) for the build
    3. Create a buildspec.yml file
        - a configuration file that determines build process for the project
        - multiple different phases:
            - install, pre_build, build, post-build
            - Can set commands to run in specific phases
        - artifacts defines the files and directories CodeBuild will retain in output
        - '**/*' means everything

### Step 4 Create Delivery Pipeline (AWS CodePipeline) ###
    - Create a new CodePipeline using the GitHub repo as the source and connect it to the already deployed Elastic Beanstalk
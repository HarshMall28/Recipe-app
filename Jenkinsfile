pipeline{
//    agent any
    
//    tools {
//        terraform 'terraform-1008'
//    }
    
    agent  any
        options {
                timestamps ()
  //              terraform 'terraform'
  //              ansiColor('xterm')
            }
    
    stages{
        stage('Git Checkout'){
            steps {
                git branch: 'main', credentialsId: '46095236-016d-4423-a1f6-7788c4d0f414', url: 'https://github.com/HarshMall28/devopstest'
            }
        }
        
        stage('Terraform Init'){
            steps{
                sh label: '',script: 'terraform init'
            }
        }
        
        stage('Terraform apply'){
            steps{
                echo "Terraform action from the parameter is --->${action}"
                sh label: '',script: 'terraform ${action} --auto-approve'
            }
        }
//        stage('Plan') {
//            steps {
//                sh 'pwd;cd terraform/aws-instance-first-script ; terraform init -input=false'
//                sh 'pwd;cd terraform/aws-instance-first-script ; terraform workspace new ${environment}'
//                sh 'pwd;cd terraform/aws-instance-first-script ; terraform workspace select ${environment}'
//               sh "pwd;cd terraform/aws-instance-first-script ;terraform plan -input=false -out tfplan "
//                sh 'pwd;cd terraform/aws-instance-first-script ;terraform show -no-color tfplan > tfplan.txt'
//            }
//        }
//        stage('Approval') {
//           when {
//               not {
//                   equals expected: true, actual: params.autoApprove
//               }
//           }

//           steps {
//               script {
//                    def plan = readFile 'terraform/aws-instance-first-script/tfplan.txt'
//                    input message: "Do you want to apply the plan?",
//                    parameters: [text(name: 'Plan', description: 'Please review the plan', defaultValue: plan)]
//               }
//           }
//       }

//        stage('Apply') {
//            steps {
//                echo "Terraform action from the parameter is --->${action}"
//                sh label: '',script: 'terraform ${action} --auto-approve'
//                sh "pwd;cd terraform/aws-instance-first-script ; terraform apply -input=false tfplan"
//           }
//        }
        
    }
}

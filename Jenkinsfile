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
                git branch: 'main', credentialsId: '5a675c1b-611d-4b66-bf29-e47896e1e717', url: 'https://github.com/ShaliniVaibhav/test'
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

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
        
    }
}

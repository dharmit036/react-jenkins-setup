pipeline {
    agent { node { 
        label 'development' }}
    stages {
        stage ("setup") {
            steps{
                echo "Setting up Git User:"
                sh 'git config user.name dharmit036'
                sh 'git config user.email dsaradva@gmail.com'
            }
        }
        stage ("build"){
            steps {
                    echo "INFO: Build step has been started"
                    sh 'pwd'
                    echo "Installing project dependencies"
                    sh 'npm install'
                    echo "Installed all dependencies"
                    sh 'npm audit'
                    echo "Packages been audited"
            }
        }
        stage ("deploy"){
            steps {
                    sh 'sudo chmod +x $(pwd)/deploy.sh'
                    sh '$(pwd)/deploy.sh $(pwd)'
                    echo "Deployment completed"
            }
        }
    }
    post {
        success {
                sh 'sudo chmod +x $(pwd)/deploy.sh'
                sh '$(pwd)/deploy.sh $(pwd)'
                echo "Pipeline executed successfully...."
        }
        failure {
                echo "Something went wrong with build id: ${BUILD_ID}"
                echo "Check more info at: ${BUILD_URL}"
            }
    }
}

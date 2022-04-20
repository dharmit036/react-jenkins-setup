pipeline {
    agent { node { 
        label 'development' }}
    stages {
        stage ("build"){
            steps {
                    echo "INFO: Build step has been started"
                    echo "Installing project dependencies"
                    sh 'npm install'
                    echo "Installed all dependencies"
                    sh 'npm audit'
                    echo "Packages been audited"
            }
        }
        stage ("deploy"){
            steps {
                    sh 'whoami'
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

pipeline {
    agent { node { 
        checkout scm
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
                    echo "Stopping old processes"
                    sh 'pm2 stop personal-portfolio && pm2 delete personal-portfolio || true'
                    echo "Launching new process"
                    sh 'PORT=1338 pm2 start app.js -n personal-portfolio'
                    sh 'pm2 save'
                    echo "Deployment completed"
            }
        }
    }
}

pipeline {
    agent any
    stages {
        stage ('build'){
            steps {
                script {
                    echo "INFO: Build step has been started"
                    echo "Current folder $(pwd)"
                    echo "Installing project dependencies"
                    npm install
                    echo "Installed all dependencies"
                    npm audit
                    echo "Packages been audited"
                }
            }
        }
        stage ("deploy"){
            steps {
                script {
                    echo "Stopping old processes"
                    pm2 stop personal-portfolio && pm2 delete personal-portfolio || true
                    echo "Launching new process"
                    PORT=1338 pm2 start app.js -n personal-portfolio
                    echo "Deployment completed"
                }
            }
        }
    }
}
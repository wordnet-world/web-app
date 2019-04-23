pipeline {
  agent any
  stages {
    stage('Yarn Build') {
      parallel {
        stage('Yarn Build') {
          agent {
            docker {
              image 'node:8.16'
              args '-v /root:$WORKSPACE'
            }

          }
          steps {
            sh 'yarn install && yarn build'
          }
        }
        stage('Env') {
          agent any
          steps {
            sh 'env'
          }
        }
      }
    }
    stage('Docker Build') {
      agent {
        docker {
          image 'docker:18.09'
          args '''-v /root:$WORKSPACE
--privileged'''
        }

      }
      environment {
        GIT_COMMIT = '$GIT_COMMIT'
      }
      steps {
        sh 'docker build . -t cjblink1/wordnet-world-web-app:latest'
      }
    }
    stage('Docker Push') {
      agent {
        docker {
          image 'docker:18.09'
          args '''-v /root:$WORKSPACE
--privileged'''
        }

      }
      environment {
        GIT_COMMIT = '$GIT_COMMIT'
      }
      steps {
        sh 'docker push cjblink1/wordnet-world-web-app:latest'
      }
    }
  }
}
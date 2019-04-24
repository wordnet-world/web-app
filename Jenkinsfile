pipeline {
  agent any
  stages {
    stage('Docker Build and Push') {
      steps {
        script {
          def webAppImage = docker.build("cjblink1/wordnet-world-web-app:${GIT_COMMIT}")
          webAppImage.push()
        }
      }
    }
    stage('Update Kubernetes Config') {
      steps {
        git 'git@github.com:wordnet-world/config.git'
        script {
          docker.image('bitnami/kubectl:1.14.1').inside('--entrypoint=\'\'') {
            sh "kubectl set image --filename manifests/wordnet-world-web-app.yaml --local=true --dry-run cjblink1/wordnet-world-web-app:${GIT_COMMIT}"
          }
        }
        sh 'git add manifests/wordnet-world-web-app.yaml'
        sh "git commit -m \"Updated web app to version ${GIT_COMMIT}\""
        sh 'git push'
      }
    }
  }
}
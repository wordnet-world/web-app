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
            sh 'mv manifests/wordnet-world-web-app-deployment.yaml manifests/wordnet-world-web-app-deployment.yaml.old'
            sh "kubectl set image -f manifests/wordnet-world-web-app-deployment.yaml.old --local wordnet-world-web-app=cjblink1/wordnet-world-web-app:${GIT_COMMIT} -o yaml > manifests/wordnet-world-web-app-deployment.yaml"
          }
        }
        sh 'git add manifests/wordnet-world-web-app-deployment.yaml'
        sh "git commit -m 'Updated web app deployment to ${GIT_COMMIT}'"
        sh 'git push --set-upstream origin master'
      }
    }
  }
}
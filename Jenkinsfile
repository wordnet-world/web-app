node {
  checkout scm
  sh env
  def customImage = docker.build("cjblink1/wordnet-world-web-app:${env.GIT_COMMIT}")
}
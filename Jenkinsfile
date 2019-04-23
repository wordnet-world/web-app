node {
  checkout scm
  def customImage = docker.build("my-image:${env.GIT_COMMIT}")
}
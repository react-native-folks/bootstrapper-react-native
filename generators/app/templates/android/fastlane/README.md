fastlane documentation
================
# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```
xcode-select --install
```

Install _fastlane_ using
```
[sudo] gem install fastlane -NV
```
or alternatively using `brew cask install fastlane`

# Available Actions
## Android
### android build
```
fastlane android build
```
Build
### android deploy
```
fastlane android deploy
```
Deploy a new version to the Google Play
### android firebase_dev
```
fastlane android firebase_dev
```
Deploy dev to firebase
### android firebase_staging
```
fastlane android firebase_staging
```
Deploy staging to firebase
### android firebase_prod
```
fastlane android firebase_prod
```
Deploy prod to firebase
### android upload_app_to_playstore
```
fastlane android upload_app_to_playstore
```
Deploy prod to playstore

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).

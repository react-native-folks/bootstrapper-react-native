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
## iOS
### ios archive
```
fastlane ios archive
```
Builds Archive
### ios firebase_dev
```
fastlane ios firebase_dev
```
Share app in firebase for Dev
### ios firebase_staging
```
fastlane ios firebase_staging
```
Share app in firebase for Staging
### ios testflight_prod
```
fastlane ios testflight_prod
```
Share app in Testflight for Production
### ios build
```
fastlane ios build
```
Downloads dependencies, retrieves signing identities and builds

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).

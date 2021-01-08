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
or alternatively using `brew install fastlane`

# Available Actions
## Android
### android distribute_develop
```
fastlane android distribute_develop
```
Submit a new Develop Release Build to Firebase App Distribution.
### android distribute_staging
```
fastlane android distribute_staging
```
Submit a new Stage Release Build to Firebase App Distribution.
### android distribute_production
```
fastlane android distribute_production
```
Submit a new Production Release Build to Firebase App Distribution.
### android release_production
```
fastlane android release_production
```
Submit a new Production Release Build to Google Play Console.

----

This README.md is auto-generated and will be re-generated every time [fastlane](https://fastlane.tools) is run.
More information about fastlane can be found on [fastlane.tools](https://fastlane.tools).
The documentation of fastlane can be found on [docs.fastlane.tools](https://docs.fastlane.tools).

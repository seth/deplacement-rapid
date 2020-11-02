# Deplacement Rapid

During confinement in France, everyone is required to fill out an "attestation de déplacement dérogatoire" in order to leave their house.

This repository contains Javascript file you can use to create an iOS shortcut to automate the process of filling in the web form to generate a attestation.

## For iOS:

Create a new shortcut in the [shortcut app](https://apps.apple.com/us/app/shortcuts/id915249334).

1. add an action
1. select web
1. select _Run JavaScript on Web Page_ the Safari section
1. replace the code with what's in the `deplacement-rapid.js` file
1. replace the variable values with your personal data
1. set the action to execute on shortcut input (instead of _Web Page_)
1. in the shortcut options (the `...` button)

    1. enable _Show in Share Sheet_, 
    1. then in _Share Sheet Types_, deselect everything but _Safari Web Pages_

Use the shortcut:
 
1. Go to the form (https://media.interieur.gouv.fr/deplacement-covid-19/) in Safari
2. Click on the share icon
3. Select the shortcut


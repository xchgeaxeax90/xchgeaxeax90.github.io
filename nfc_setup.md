---
layout: page
title: "Customizing your NFC Tag"
permalink: /nfc_setup
toc: true
---

You're likely here because you received an NFC tag from me to put on your convention badge and want to customize it. If this is not the case, you either need to come find me to get one (I don't bite!) or purchase an NFC tag yourself (see [Purchasing](#purchasing))

## URL/Data Selection
To customize your NFC tag, you need something to put on it. This can be a URL of some sort, a contact card, phone number, email address, or even something like a WiFi network. Good choices include:

#### Discord User Link

You can set up a link to your discord user by copying your discord user id, which can be found by going to your discord settings, Advanced, then turning on Developer Mode. If you then click/tap your discord username, then possibly a (...) button you will see an option called "Copy User ID". If you click/tap that, it should copy a number like `235148962103951360` to your clipboard.

Paste that id number into the following url:

`discordapp.com/users/<YOUR ID HERE>`

Like so:

`discordapp.com/users/235148962103951360`

#### Twitter/Bluesky/Other social media 

Just copy the URL of your profile

#### Carrd

While it is possible to load multiple URLs or other pieces of data onto an NFC tag, when a phone reads the tag it only opens the first URL loaded onto the tag. This means if you have multiple things (social media links, link to your store, etc.) you will need to aggregate them onto a single URL using something like https://carrd.co/

## Loading the data onto your NFC Tag

### iOS

The recommended app to write data to your NFC card is [NFC Tools](https://apps.apple.com/us/app/nfc-tools/id1252962749). It's free, with an in app purchase for some more advanced features that are not needed here.

Copy the URL or other info you want to write to the card from the previous section to your clipboard then open the app.

When you open the app, you will be presented with a screen like this:

![NFC Tools Home Screen](images/IMG_7344.PNG){: width="400"}

Tap "Write", which will show this screen:

![NFC Tools Write Screen](images/IMG_7345.PNG){: width="400"}

Tap "Add a record", which will show this screen:

![NFC Tools Record List](images/IMG_7346.PNG){: width="400"}

In most cases you'll want to tap "URL/URI". However, there are separate record types for things like email addresses or telephone numbers if you choose to use them. There is also a separate option for Social Networks if you want to use it, however a URL will do the same thing.

When you select a record type it should take you to a screen like this:

![NFC Tools Record Entry](images/IMG_7347.PNG){: width="400"}

You should then be able to paste in your URL (or other info if you chose a different record type) into the box. As the bar below "Enter your URL" suggests, you'll want to remove the leading "https://" from your URL if it is there.

Tap "OK" to finish entering the record, which should take you to the following screen:

![NFC Tools Ready to Write](images/IMG_7348.PNG){: width="400"}

Finally, hold your NFC tag up to the top of your phone and tap "Write". 
Once your tag has been written, you should be able to hold it up to the top of your phone and see a popup prompting you to go to the URL or other info stored in the tag!

## Purchasing


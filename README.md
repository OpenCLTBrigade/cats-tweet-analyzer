# cats-tweet-analyzer

![@opencltbrigade/cats-schedule-sdk](https://img.shields.io/npm/v/@opencltbrigade/cats-tweet-analyzer?style=flat-square)

## Introduction

### Background

To see both current and historical delays along the LYNX Blue Line you currently need to view the [Charlotte Area Transit System's](http://ridetransit.org) [Twitter Account](https://twitter.com/CATSRideTransit). This means residents who do not use Twitter are excluded from receiving these announcements, and, for those who do, messages may go unseen due to Twitter's algorithms or other content posted to CATS' feed.

We appreciate CATS at sharing service updates but we would love to see it done in a more consistent and accessible way. At the time of this writing, neither the [Rider's Alerts Page](https://charlottenc.gov/cats/alerts/Pages/Rider's-Alerts.aspx) or [Notify Me](https://public.govdelivery.com/accounts/NCCHARMECK/subscriber/new?qsp=NCCHARMECK_1) service appear to cover real-time service disruptions. The [major detours, delays, and cancellations page](https://charlottenc.gov/cats/alerts/Pages/Inclement-Weather.aspx) also does not appear to include historical data (we're unsure if it's used for announcing delays in real-time as we have not seen the page during an active delay). It would also be great if service delays and restorations were historically documented in the [city's open data portal](http://data.charlottenc.gov/). (Such a move would actually make it possible to integrate real-time alerts with [Citygram](https://www.citygram.org/charlotte))

### About this project

This project was built to help the public create their own solutions for tracking Blue Line service delays. Whether it be for personal use, research and analysis, signage in offices to inform employees, or apps that allow users to subscribe to notifications.

Nobody likes to travel to a station just to realize their train has been delayed twenty minutes. We believe that giving residents access to schedule disruptions will assist them in planning their commutes and hopefully increase confidence in using the Blue Line as an alternative to driving.

### Disclaimer

This code is a library that's provided without warranty. Contributors and researchers for this project have manually analyzed the patterns CATS uses when announcing service delays and restorations via Twitter, and have implemented some basic checks to determine if a tweet may or may not be in reference to either. CATS may vary the format of their tweets at any time and thus there is a chance for false positives or false negatives with these rules.

#### About the methodology

This library looks for the terms "lynx blue line" and "delay" to determine if a tweet is announcing a delay. It can get tricked if CATS were to announce a future delay. To determine if a service restoration has been announced, we look for the presence or absence of several terms to increase or reduce a confidence score. A tweet announcing a delay does not always have a corresponding service restoration message.

## Getting Started

### Usage Overview

1. You'll need to register your own [Twitter Application](https://developer.twitter.com)
2. Generate a Bearer token
3. Create a `.env` using the provided `.env.example` with your Twitter application credentials
4. Follow the example code in `src/example.ts` for your own implementation

### Libraries

#### async getTimeline(): Tweet[]

Fetches the latest tweets from the `@CATSRideTransit` Twitter.

#### analyzeTweets(Tweet[]): AnalyzedTweet[] & analyzeTweet(Tweet): AnalyzedTweet

Appends `hasServiceDelay: boolean`, `hasServiceRestoration: boolean`, `serviceDelay: {}` and `serviceRestoration: {}` to the initial `Tweet`.

## Contributing

- Comments and suggestions to improve our methodology are welcome
- Pull requests for enhancements would be great
- We would love to offer potential integration with a natural language processing service to better improve our rulesets.
  - Ex. Grabbing the estimated delay, locations of delays, if a delay is scheduled for the future, etc.
- Tests! Tests would be great.

### Develop!

- You need `yarn` and `typescript`
- VS Code debugger setup is included in the repo
- `src/example.ts` is the debug script. You can also build and run it manually using `yarn start`

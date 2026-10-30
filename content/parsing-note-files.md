---
title: Parsing the Note Markdown Files
slug: parsing-notes
description: Talking through the parsing logic.
date: 2026-10-30
updated: 2026-10-30
draft: true
---

# Parsing the Note Markdown Files

I am currently working on the following problem that I need to solve. The basic idea is that I have these various markdown files that I am using for the notes. I would rather have every note be a markdown file rather than storing them in a database for a few reasons. The first is that this website should be very simple. Any complexity that I would want to add explicity needs a reason to exist. As such, using a database for a website where there is only one user creating content is unneccesary. It also has the gretat built in feature of using git as the source control rather than needing to implement a less powerful version of this with a database. The second is something that I have already mentioned but I will be the only one creating content and so there is no need to do anything else. Over complicating a system early is soemthing I hate doing. The entire reason of creating this website is to have a playgroud that I can explore different ideas in easily, learn the Golang programming language as well as learning more about server side rendering rather than what I currently do of relying on a framework (React) to create all my websites.

The first problem I have come across is this.

Statement: You are given a markdown file that contains two distinct parts. The first part is the "metadata" for a note. This includes things like the title of the note, date published, etc. This section is defined by being between two indicator token lines. Everything following the second indicator token is assumed to be the actual HTML content of the note. Your job it to parse this file into a Note struct that we can then use in a template.

When it comes to parsing I am assuming that each metadata field is given as a key value pair that takes the form "<key>: <value>". This is easy enough as I can just split the line on this pivot and use a switch statement to set the assoicated fields. I also wanted to have tags for a note. In the struct this would be an array of strings. However, the way I would like to implement these in the markdown file would be with the tags key and then below would be the various tags each on new lines. This seems like a more difficult problem to solve so for now we will not handle these types of keys. I should look into how other markdown parsers work like yml or json.
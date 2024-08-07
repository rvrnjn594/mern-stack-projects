# Design System

Learn about what a design system is and how to use it.

> We'll cover the following:
>
> - What is a design system?
> - Up and running with Tailwind

In this lesson, we'll explore design systems and how to install Tailwind CSS in the simplest way.

## What is a design system?

Since Tailwind offers a sort of design system, it’ll be useful to say a few words about what a design system is and how it can facilitate the design process.

In simple terms, **a design system is a set of rules and conventions for how a design should be built.**  
 It includes predefined rules about sizes, colors, text, and so on. Traditionally, when we build a design, we need to make multiple choices about things like the following:

- The size of the design elements (text, images, etc.)
- The colors and color variations
- The fonts and other typographic features, and so on

> Making a decision for every small part of a design can lead to choice paralysis and inconsistency. It’s tedious and error prone. It would be much easier if we first established a design system with already predefined options that are tested and proven to work. We can then just select from the existing, limited set of options and combine them to produce the desired outcome.
>
> This is actually what Tailwind gives us—a well-crafted design system that we can use to speed up, smooth, and facilitate our design-building process.

## Up and running with Tailwind

The official documentation describes a number of different ways to install Tailwind. In this course, we’ll use the simplest one—which involves including Tailwind in our projects via the Play CDN option. So, we just created an HTML file for you.

        <!doctype html>
        <html>
            <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <link rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
                <script src="https://cdn.tailwindcss.com"></script>
                <h1>Hello World</h1>
            </body>
        </html>

        {
            "dependencies": {"bootstrap": "5",
            "tailwindcss": "3.2.6"},
            "main": "/index.html",

            "scripts": {
                "start": "live-server --port=8080 --entry-file=index.html"
            }
        }

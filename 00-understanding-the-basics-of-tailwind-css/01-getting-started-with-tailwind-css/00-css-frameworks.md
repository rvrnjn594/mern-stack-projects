# CSS Frameworks

Learn about the differnt types of CSS frameworks and utility classes.

> We'll cover the following:
>
> - Types of CSS frameworks
>   - Utility-first frameworks
>   - What is Tailwind?
>   - What's a utility class?
>     - Font-style

CSS is a fundamental technology used to control the presentation and layout of HTML elements on web pages while Tailwind CSS is a utility-first CSS framework designed to streamline the process of designing.

## Types of CSS frameworks

There are two main types of CSS frameworks.

- One is based around components - a group that includes frameworks such as Bootstrap, Foundation, and Bulma.
- The other type of CSS framework is based around utilities - a group that includes the like of Tachyons, Tailwind CSS, and Windi CSS.

For many years, component-based frameworks were the de facto standard for building websites quickly and easily.  
 But all this magic comes with a price.  
 Without serious customization, sites built with such frameworks look similar to each other, and customization can pose significant challenges for anyone who wants to build something more complex and/or creative.  
 Component-based styles are easy to implement, but inflexible and confined to certain boundaries.  
 Solving specificity issues while trying to override the default styles of a particular framework isn’t a fun and productive job.

### Utility-first frameworks

Utility-first frameworks were created to solve this problem. **A utility-first framework is built with low-level functionality in mind.**  
 Utility classes offer much more power and flexibility than component classes.

Utility-first frameworks provide the following advantages:

- Utility classes operate at a low level.  
   This means we have more control and flexibility over how we apply them—a concept that’s similar to the power and flexibility offered by a low-level language like C or C++, in contrast to high-level languages such as JavaScript or PHP.
- Utility classes are easy to customize, so we can build any design.
- A utility-first approach scales well.  
   It’s great for managing and maintaining large projects because we only have to maintain HTML files instead of a large CSS codebase. It’s already been used with success by big sites like GitHub, Heroku, Kickstarter, Twitch, and Segment.
- Utility classes can be adapted to any design.
- Utility classes are completely customizable and extensible. It’s easier to build unique, custom website designs without fighting with unwanted styles.
- Utility classes allow for much easier implementation of responsive design patterns.
- Utility classes have consistent styles, which gives us a ready-to-use design system. We can also create our own design system if we need to.
- With utility classes, we can still extract common, repetitive patterns into custom, reusable components. But in contrast to predefined components, custom components will be exactly what we need.

In summary, we can say that a utility-first framework gives us a balance between the concrete and the abstract.

Now that we’ve seen how useful utility-first frameworks can be, it’s time to pick one and see what it can do for us in action.  
 In this course, we’ll explore Tailwind CSS, which is the most popular of the utility-first frameworks.

### What is Tailwind?

Tailwind is a set of low-level, reusable utility classes that can be used like building blocks to create virtually any design we can imagine.  
 This utility-first framework covers the most important CSS properties, but it can be easily extended in a variety of ways.  
 It can be used either for rapid prototyping or for creating full-blown designs.

Tailwind has great documentation, covering every class utility in detail and showing the ways it can be customized.

Tailwind CSS 3.0 (the version we’ll use throughout the course) supports the latest stable versions of Chrome, Firefox, Edge, and Safari. There’s no support for any version of IE, including IE11.

### What's a utility class?

As we already know, Tailwind's main characteristics is the use of utility classes.  
 But what is a utility class?

While a component class is a collection of predefined CSS settings applied in an opinionated fashion, a utility class is mostly a single CSS property or behavior that we can use freely in a predictable way.  
 This gives us the freedom to combine, and mix and match different settings depending on our requirements.

With utility classes, we have greater control over each element’s appearance.  
 We can change and fine-tune an element’s appearance much more effortlessly.

> In Bootstrap, we create a button by using predefined component classes, as in the following example:
>
>           <button class="btn btn-success">Success</button>
>
> Here, btn and btn-success are the component classes. Each one of them represents a collection of predefined CSS settings.
>
> In Tailwind, we create a button by using utility classes.
>
>           <button class="py-2 px-4 bg-green-500 text-white font-semibold
>                   rounded-lg shadow-md hover:bg-green-700 focus:outline-none
>                   focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
>                   Success
>           </button>
>
> Here, py-2, px-4, bg-green-500, and so on, are the utility classes, and each one of them represents just a single CSS setting.  
>  To create the button, we use multiple utilities - which we put together like the pieces of a puzzle in order to get the whole picture.

We have covered the basic difference between component and utility classes, but let's now take a closer look at utility classes.

#### Font-style

In Tailwind, the CSS **font-style: italic** is represented by the italic utility class.

Here are some more examples:

- text-align: right becomes text-right
- font-weight: 700 becomes font-bold
- border-radius: 0.25rem becomes rounded
- width: 0.5rem becomes w-2
- padding: 1.5rem becomes p-6

And here's how classes are applied in practice.  
Let's say we want to make a paragraph bold and italic. We do it this way in CSS:

        p {
            font-weight: 700;
            font-style: italic;
        }

To do the same in Tailwind, we add the font-bold and italic classes directly to the HTML element:

        <p class="font-bold italic">Lorem ipsum...</p>

In Tailwind, we can also apply classes based on an element's states, such as hover, focus, and so on.  
 For example, if we want the paragraph above to be italic only on mouse hover, we can write the class like this: **hover:italic**.

As you can see, Tailwind utility classes are mostly self-explanatory.  
 We can often imagine how the styled element looks by just reading the classes.

Some class names are heavily abbreviated, admittedly, but once we've grasped the pattern and had a bit of practice with them, they're easy to remember and recall.

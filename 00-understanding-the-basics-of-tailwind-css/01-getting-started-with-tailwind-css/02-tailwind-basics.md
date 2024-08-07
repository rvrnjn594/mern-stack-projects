# Tailwind Basics

Learn about the basics of Tailwind.

> We'll cover the following:
>
> - Exploring Tailwind basics
>   - Layout
>   - Typography
>   - Colors
>   - Imagery: Icons and images

In this lesson, we’ll learn about the main factors necessary to design any web project in Tailwind.

## Exploring Tailwind basics

There are four main factors involved in every web design project:

- Layout: It all starts with a blueprint. This defines how the whitespace and elements of our design are organized and ordered.
- Typography: This includes all text content, including messages.
- Colors: This brings life to a design and defines a design’s mood and brand.
- Imagery: This includes the visuals of a design, such as icons, images, illustrations, and so on.

Next, we’ll learn more about all of these factors and see how Tailwind can help us implement them in the development phase.  
 The aim here is to give you a holistic view of what classes to look for when you’re working on a particular component.

> **Note:** Our coverage of layout, typography, color, and imagery here won’t be able to include principles and techniques relating to responsive web design because that topic is beyond the scope of this Tailwind course. But it’s an important topic that’s central to modern web design.

### Layout

In this section, we’ll briefly explore the most commonly used classes for layout composition. We can group classes by their function, as follows:

- Size: This includes width and height utilities for setting an element’s dimensions.
- Space: This includes margin and padding utilities for adding space in our design.
- Position: This includes an element’s positioning and coordinates.
- Borders: This includes various utilities for setting an element’s borders, such as style, width, and radius.
- Display: This includes the way elements are rendered.

> In modern CSS, we also have Flexbox and Grid classes for building a layout.  
>  We’ll cover only the Flexbox utilities in this course, as they’re much simpler and easier to use for beginners.

When we use Flexbox, we start by creating a flex container by adding a flex class to a parent element. Then we add additional flex classes to configure how the flex items inside the container (direct children) will be displayed.  
 For example, to render flex items vertically as a column, we add a flex-col class along with the flex class.

        <div class="flex flex-col">
            <div>1</div>
            <div>2</div>
            <div>3</div>
        </div>

This is the base for applying for flex classes. There are plenty of them in Tailwind, and it would be tedious to explain each one individually.  
 Instead, when we explore a practical example, later on, we’ll cover the flex classes we use in that example.

### Typography

Now that we have a layout, the next step is to add the content we want to display. This is mostly done by using text. Here are the most commonly used text utilities grouped by function:

- Font: This includes font family, size, style, and weight utilities, as well as tracking and leading settings.
- Text: This includes text aligning, color and opacity, decoration, and transformation.
- List: This includes list type and position styling.

## Colors

We have a layout, and we have text. Now we need to bring life to them by using some colors. Tailwind offers a large, premade color palette. Applying color is super easy. Here are the two most common uses of color:

- Text: To apply a color to text, we use the text-[color]-[number] pattern. The number variable defines tints and shades. For example, to make text dark red, we can use the text-red-900 class. To make it light red, we can use the text-red-100 class.
- Background: To use a color as a background, we use the bg-[color]-[number] pattern.

## Imagery: Icons and images

The final spice in our design recipe is the visual imagery. Visuals are like salt and spices: a meal isn’t tasty without them. The most commonly used visuals are:

- Icons: These can be based on SVGs or icon fonts.  
   As we saw earlier, we included Font Awesome in our template. To use an icon, we use the fas fa-[icon-name] pattern.  
   For example, to use a search icon for a search input, we can use the fas fa-search classes. Notice that fas placed before the icon name means that we use Font Awesome’s solid icons collection, which is free.  
   Font Awesome offers some base styling for its icons, but we can style them with Tailwind’s utilities (for color, size, etc.) as well.
- Images: To style images, we can use a number of Tailwind classes, such as width and height, opacity, shadows, borders, filters, and so on.

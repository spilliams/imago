#imago

jQuery plugin for creating image callouts and tooltips.  
Note that this plugin is currently unimplemented. The documentation below currently serves as a roadmap.

##About

If you search for "jQuery image tooltip" what you find is 2356874 different ways to put an image inside a tooltip that shows only when you hover over a link. This is not what this is. Imago is about defining an area inside an image which is linked to a caption or callout.  
Common example: Facebook image tags.  Like `<map>`, but less 90s.

##Installation

Include `jquery.imago.js` and `jquery.imago.css` in your `head` tag.

##Usage

Basic setup:

    $("#myImage").imago({options});
    
See a list of other methods below.

##Options

<table>
  <tr>
    <th>option</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td>dataPoints</td>
    <td>array</td>
    <td>[]</td>
    <td>Initial callout data.</td>
  </tr>
  <tr>
    <td>displayType</td>
    <td>string</td>
    <td>"callout"</td>
    <td>Defines how the caption text is displayed. Other acceptable types are "list", "tooltip" and "caption".</td>
  </tr>
  <tr>
    <td>textOpacity</td>
    <td>number</td>
    <td>1</td>
    <td>Defines the opacity of the caption text and callout graphics (if any). This opacity only applies when neither text nor tag are active.</td>
  </tr>
  <tr>
    <td>tagOpacity</td>
    <td>number</td>
    <td>0.5</td>
    <td>Defines the opacity of the tag graphics. This opacity only applies when neither the text nor the tag are active.</td>
  </tr>
  <tr>
    <td>activateOn</td>
    <td>string</td>
    <td>"hover"</td>
    <td>Defines when a text or tag will activate. Acceptable options are "hover", "click" or "none" (always active).</td>
  </tr>
</table>

Here are a few `displayType`-specific options:

<table>
  <tr>
    <th>option</th>
    <th>type</th>
    <th>default</th>
    <th>description</th>
  </tr>
  <tr>
    <td colspan=5>callout</td>
  </tr>
  <tr>
    <td>displayPosition</td>
    <td>string</td>
    <td>"top"</td>
    <td>Defines where the text is displayed. Acceptable options for "callout" type displays are "top" and "bottom".</td>
  </tr>
  <tr>
    <td colspan=5>list</td>
  </tr>
  <tr>
    <td>displayPosition</td>
    <td>string</td>
    <td>"right"</td>
    <td>Defines where the text is displayed. Acceptable options for "list" type displays are "left" and "right".</td>
  </tr>
  <tr>
    <td colspan=5>tooltip</td>
  </tr>
  <tr>
    <td>displayPosition</td>
    <td>string</td>
    <td>""</td>
    <td>Defines where the text is displayed. Unnecessary for "tooltip" type displays.</td>
  </tr>
  <tr>
    <td colspan=5>caption</td>
  </tr>
  <tr>
    <td>captionNav</td>
    <td>boolean</td>
    <td>false</td>
    <td>Show caption navigation arrows?</td>
  </tr>
  <tr>
    <td>displayPosition</td>
    <td>string</td>
    <td>"bottom"</td>
    <td>Defines where the text is displayed. Acceptable options for "caption" type displays are "top" and "bottom".</td>
  </tr>
</table>

##Types

###DataPoint

`{tag:{x:4,y:8},text:"Here lyes the bodie of a grate mann"}`

##Events

todo

##Methods

    // get the state of the imago
    $("#myImage").imago('dataPoints');                // returns just the data points of the imago
    
    // change the state of the imago
    $("#myImage").imago('addPoint',dataPoint);
    $("#myImage").imago('removePoint',dataPoint);
    $("#myImage").imago('removePoint',integer);       // integer specifies index of dataPoint
    $("#myImage").imago('dataPoints',array);
    
    $("#myImage").imago('activatePoint',dataPoint);
    $("#myImage").imago('activatePoint',integer);     // integer specifies index of dataPoint
    $("#myImage").imago('deactivatePoint',dataPoint);
    $("#myImage").imago('deactivatePoint',integer);   // integer specifies index of dataPoint
    
    $("#myImage").imago('navLeft');                   // simulate clicking the left nav button
    $("#myImage").imago('navRight');                  // simulate clicking the right nav button

##Custom Styling, Or A Look Inside

Upon initializing a new imago with data points, the image is embedded in a `div.imago`. Each data-point's text is placed within a `TAG#imago-text-ID.imago-text`, where ID is the index of the text's data point, and TAG is either `div` or `li` depending on the `displayType`. Tags on the image are inside `div#imago-tag-ID.imago-tag`. If `displayType` is "callout", the line connecting the tag and text is `div#imago-callout-ID.imago-callout`. Active texts and tags get `.imago-active`.  
Navigation controls are in `div#imago-nav-DIR.imago-nav`, where DIR is either "left" or "right".

##Future

- Better abstraction for opacity/activation rules.

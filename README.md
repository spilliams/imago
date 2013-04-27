#imago

jQuery plugin for creating image callouts and tooltips.

##About

If you search for "jQuery image tooltip" what you find is 2356874 different ways to put an image inside a tooltip that shows only when you hover over a link. This is not what this is. Imago is about defining an area inside an image which is linked to a caption or callout.  
Common example: Facebook image tags.  Like `<map>`, but less 90s.

##Installation

This plugin was built with jquery-1.9.1 in mind. I'm not sure how backwards- or forwards-compatible it is, but I'd be happy to look into it on request.

Include `jquery.imago.js` and `jquery.imago.css` in your `head` tag.

##Usage

Given your current markup:

    <img src="myImage.jpg" id="myImage">

Initialize a new imago with any of these:

    $("#myImage").imago();
    $("#myImage").imago({displayType:"list"});
    $("#myImage").imago({
      displayType: "caption",
      dataPoints: [
        {tag:{left:4,top:8,width:16,height:16},text:"Here lyes the bodie of a grate mann"},
        {tag:{left:10,top:40,width:16,height:16},text:"1808-1839"},
      ],
    });

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
    <td>activateOn</td>
    <td>string</td>
    <td>"hover"</td>
    <td>Defines when a text or tag will activate. Acceptable options are "hover", "click" or "none" (always active).</td>
  </tr>
  <tr>
    <td>displayPosition</td>
    <td>string</td>
    <td>see description</td>
    <td>Defines where the text is displayed. Acceptable options for "callout" type displays are "top" and "bottom", default for "callout" is "top". Acceptable options for "list" type displays are "left" and "right", default for "list" is "right". Unnecessary for "tooltip" type displays. Acceptable options for "caption" type displays are "top" and "bottom", default for "caption" is "bottom".</td>
  </tr>
  <tr>
    <td>captionNav</td>
    <td>boolean</td>
    <td>false</td>
    <td>Show caption navigation arrows? Only applies for "caption" displays.</td>
  </tr>
</table>

##Types

###DataPoint

`{tag:{left:4,top:8,width:16,height:16},text:"Here lyes the bodie of a grate mann"}`

##Other Methods

    $("#myImage").imago('dataPoints');                // returns just the data points of the imago
    
    $("#myImage").imago('addPoint',dataPoint);
    $("#myImage").imago('removePoint',dataPoint);
    $("#myImage").imago('dataPoints',array);
    
    $("#myImage").imago('activatePoint',dataPoint);
    $("#myImage").imago('deactivatePoint',dataPoint);
    
    $("#myImage").imago('navLeft');                   // simulate clicking the left nav button
    $("#myImage").imago('navRight');                  // simulate clicking the right nav button
    
    $("#myImage").imago('render');

##DOM

Initially, your source will look similar to

    <img src="myImage.png" id="myImage">

Upon initializing a new imago on `#myImage` the source is

    <div class="imago" id="imago-myImage">
      <img src="myImage.png" id="myImage">
    </div>

And when dataPoints are added, the source reaches maturity!

    <div class="imago" id="imago-myImage">
      <img src="myImage.png" id="myImage">
      <div class="imago-tags">
        <div class="imago-tag" style="left:4;top:8;width:16;height:16;"></div>
      </div>
      <div class="imago-texts">
        <div class="imago-text callout">Here lyes the bodie of a grate mann</div>
      </div>
    </div>

Navigation controls would look like

    <div class="imago-nav">
      <div class="imago-nav-left"></div>
      <div class="imago-nav-right"></div>
    </div>

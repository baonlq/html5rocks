
//Presenter	Date	Event	Location	Slides	Slideshare	Youtube	Vimeo	Origlink	Presently	Notes

window.SLD = window.SLD || {};
SLD.talktmpl = '' +
'                                                      \
{{#each talksArr}}                                     \
<article data-event="{{title}}">                       \
  <h3>{{title}}</h3>                                   \
  <h4>                                                 \
      <span class=presenter>{{presntr presenter}}</span>       \
      <span class=event>{{event}}</span>               \
      {{#if location}}                                 \
        (<span class=location>{{location}}</span>)     \
      {{/if}}                                          \
      {{#if date}}                                     \
        <span class=date data-time="{{dateexact}}">{{date}}</span>               \
      {{/if}}                                          \
  </h4>                                                \
  <div class="body">                                   \
                                                          \
    {{#if youtube}} {{video youtube}} {{/if}}             \
    {{#if vimeo}} {{video vimeo}} {{/if}}                 \
    {{#if blip}} {{video blip}} {{/if}}                   \
                                                          \
    {{#if slideshare}} {{slides slideshare}} {{/if}}      \
    {{#if presently}} {{slides presently}} {{/if}}        \
    {{#unless slideshare}}                                \
      {{#if slideslink}}                                  \
        <div class="slides">                              \
          <a href="{{slideslink}}" class="slides" target="_blank" title="Click to open slides in new tab">      \
            {{#if image}} <img src="{{img image}}"> {{/if}}                                                         \
            {{#unless image}} <img src="http://www.awwwards.com/awards/images/1284023910slides.jpg">{{/unless}} \
          </a>                                          \
        </div>                                          \
      {{/if}}                                           \
    {{/unless}}                                         \
                                                        \
  </div>                                                \
  {{#if notes}}                                         \
    <p class=notes>{{{notes}}}</p>                      \
  {{/if}}                                               \
</article>                                              \
{{/each}}                                               \
 '; 
 
 

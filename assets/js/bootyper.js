function code_toggle() {
    if (!code_show){
    $('div.input').hide();
    $('div.prompt.output_prompt').hide();
    } else {
    $('div.input').show();
    }
 code_show = !code_show
}

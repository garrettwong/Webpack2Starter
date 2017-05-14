import * as $ from 'jquery';

export default class PageLoad {
    constructor() {

    }

    init(fn: any) : void {
        $(document).ready(function() {
            console.log('document.ready()');

            fn();
        })
    }
}
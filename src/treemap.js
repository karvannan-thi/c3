import CLASS from './class';
import { c3_chart_internal_fn } from './core';
import { isFunction } from './util';

c3_chart_internal_fn.initTreemap = function () {
    var $$ = this, d3 = $$.d3, config = $$.config;
    $$.treemap = d3.layout.treemap().round(true).value(function(d) { return d.value; });
    if (!config.data_order) {
        $$.treemap.sort(null);
    }
};
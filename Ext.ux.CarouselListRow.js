Ext.ns('Ext.ux');

Ext.ux.CarouselListRow = Ext.extend(Ext.DataView, {

    initComponent: function() {

        this.scroll = 'horizontal';

        this.itemSelector = 'div.thumb-wrap';

        this.store = new Ext.data.Store({
            data: this.rawData,
            fields: [
                {name: 'html'}
            ]
        });

        this.tpl = new Ext.XTemplate(
            '<div class="row">',
                '<tpl for=".">',
                    '<div class="thumb-wrap">',
                    '<div class="thumb">{html}</div>',
                    '</div>',
                '</tpl>',
            '</div>'
        );

        // this.items = new Ext.DataView({
        //     tpl: tpl,
        //     store: store,
        //     scroll: 'horizontal',
        //     itemSelector:'div.thumb-wrap'
        // });

        Ext.ux.CarouselListRow.superclass.initComponent.apply(this, arguments);
    }

    // afterRender: function() {
    //     Ext.ux.CarouselListRow.superclass.afterRender.apply(this, arguments);
    //     this.renderRows();
    // },

});

Ext.reg('carousellistrow', Ext.ux.CarouselListRow);

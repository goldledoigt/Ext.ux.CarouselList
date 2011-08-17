Ext.ns('Ext.ux');

Ext.ux.CarouselList = Ext.extend(Ext.Panel, {

    scroll: 'vertical',

    initComponent: function() {
        Ext.ux.CarouselList.superclass.initComponent.apply(this, arguments);
    },

    afterRender: function() {
        Ext.ux.CarouselList.superclass.afterRender.apply(this, arguments);
        this.renderRows();
    },

    renderRows: function() {
        this.store.each(function(item, idx) {
            this.add({
                xtype: 'carousellistrow',
                rawData: item.get('items')
            });
        }, this);
    }

});

Ext.reg('carousellist', Ext.ux.CarouselList);

Ext.define('MyApp.view.ScreenLayout1', {
    extend: 'Ext.Panel',
    alias : 'widget.screenLayout1',
    
    config: {
        
        style: 'background-color: #cdc9c9',
        flex: 1,
        layout: {
            type: 'vbox',
        },
        defaults: {
            margin: '0 0 5 0',
            labelWidth: '125',
        },
        items: [
            {
                xtype: 'label',
                html: 'This panel takes 33% of the available space',
            },   
            {
                xtype: 'sliderfield',
                label: 'Slide this to have fun',
                name: 'myslider',
                labelAlign: 'top',
                increment: 25,
            },
            {
                xtype: 'textfield',
                label: 'My Name',
            },   
            {
                xtype: 'button',
                text: 'Some Activity',
                iconCls: 'arrow_right',
                iconMask: true, 
            }
        ]
    }
   
});
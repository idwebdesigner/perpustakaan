
// min
var min = Vue.extend({
	template: '#clock-min'
});
// hour
var hour = Vue.extend({
	template: '#clock-hour'
});
// sec
var sec = Vue.extend({
	template: '#clock-sec'
});
// time
var time = Vue.extend({
	template: '#clock-time',
	props: ['myMessage']
});
// Clock component
Vue.component('clock', {
    template: '#clock-template',
    components: {
        'min-component': min,
        'hour-component': hour,
        'sec-component': sec,
        'time-component': time
    },
    data () {
        return { time: "00:00:00" }
    },
    ready () {
        this.startTime()
    },
    methods: {
        startTime: function () {
            var min = this.$refs.min.$el,
            	sec = this.$refs.sec.$el,
            	hour = this.$refs.hour.$el;
            var now = new Date(),
            	hValue = now.getHours(),
            	mValue = now.getMinutes(),
            	sValue = now.getSeconds(),

                then = new Date(now.getFullYear(),now.getMonth(),now.getDate(),0,0,0),//midnight
                diffInMil = (now.getTime() - then.getTime()),// difference in milliseconds
                h = (diffInMil/(1000*60*60)),//hours
                m = (h*60);//minutes
                //rotate the hands accordingly
                sec.style.webkitTransform = "rotate(" + (sValue * 6) + "deg)";
                hour.style.webkitTransform = "rotate(" + (h * 30) + "deg)";
                min.style.webkitTransform = "rotate(" + (m * 6) + "deg)";
                setTimeout(this.startTime, 1000);

                // 数字时间
                mValue = this.checkTime(mValue);
                sValue = this.checkTime(sValue);
                this.time = hValue + ":" + mValue + ":" + sValue;
        },
        checkTime: function (i) {
            if (i < 10) {i = "0" + i};
            return i;
        }
    }
});

// create a root instance
var parent = new Vue({
    el: 'body'
})

"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const vue = require("vue");
const table_props = require("./table.props.js");
const type = require("./type.js");
const _hoisted_1 = { class: "cu-date-picker__select" };
const _hoisted_2 = { class: "cu-data-picker__select-head" };
const _hoisted_3 = { class: "head-content" };
const _hoisted_4 = { class: "cu-data-picker__select-content" };
const _hoisted_5 = { class: "cu-data-picker__select-week" };
const _hoisted_6 = { class: "cu-data-picker__select-days" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "cu-data-picker__select-month" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = { class: "cu-data-picker__select-year" };
const _hoisted_11 = ["onClick"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...{
    name: "CuDateTable"
  },
  __name: "date-table",
  props: table_props.dateTableProps,
  emits: table_props.dateTableEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const { show, props: injectProps } = vue.inject(type.DATEPICKER_PROVIDE);
    const dateNumber = vue.ref();
    const weeks = vue.ref([0, 1, 2, 3, 4, 5, 6]);
    const tmpYear = vue.ref();
    const tmpMonth = vue.ref();
    const tmpDate = vue.ref();
    const page = vue.ref(0);
    const pannelType = vue.ref("date");
    function monthForLang(item, lang = "zh") {
      return {
        0: "一",
        1: "二",
        2: "三",
        3: "四",
        4: "五",
        5: "六",
        6: "七",
        7: "八",
        8: "九",
        9: "十",
        10: "十一",
        11: "十二"
      }[item];
    }
    function weekForLang(item, lang = "zh") {
      return { 0: "日", 1: "一", 2: "二", 3: "三", 4: "四", 5: "五", 6: "六" }[item];
    }
    const yearList = vue.computed(() => {
      return Array.from({ length: 12 }, (val, index) => {
        return tmpYear.value + index + 12 * page.value;
      });
    });
    const dates = vue.computed(() => {
      let tmpMonthLength = new Date(tmpYear.value, tmpMonth.value + 1, 0).getDate();
      let dateList = Array.from({ length: tmpMonthLength }, (val, index) => {
        return {
          isCurMonth: true,
          value: index + 1
        };
      });
      let firstDay = new Date(tmpYear.value, tmpMonth.value, 1).getDay();
      let lastMonthLength = new Date(tmpYear.value, tmpMonth.value, 0).getDate();
      let len, i;
      for (i = lastMonthLength; i > lastMonthLength - firstDay; --i) {
        dateList.unshift({
          isPrevMonth: true,
          value: i
        });
      }
      for (i = 0, len = dateList.length; i + len < 42; ++i) {
        dateList.push({
          isNextMonth: true,
          value: i + 1
        });
      }
      let result = [];
      for (var x = 0; x < Math.ceil(dateList.length / 7); x++) {
        var start = x * 7;
        var end = start + 7;
        result.push(dateList.slice(start, end));
      }
      return result;
    });
    function prevMonth() {
      if (pannelType.value === "date") {
        tmpMonth.value === 0 ? (--tmpYear.value, tmpMonth.value = 11) : --tmpMonth.value;
      } else if (pannelType.value === "year") {
        --page.value;
      }
    }
    function nextMonth() {
      if (pannelType.value === "date") {
        tmpMonth.value === 11 ? (++tmpYear.value, tmpMonth.value = 0) : ++tmpMonth.value;
      } else if (pannelType.value === "year") {
        ++page.value;
      }
    }
    function selectYear(year) {
      tmpYear.value = year;
      pannelType.value = "month";
    }
    function selectMonth(month) {
      tmpMonth.value = month;
      pannelType.value = "date";
    }
    function selectDay(item) {
      if (isDisabled(item))
        return;
      item.isPrevMonth ? tmpMonth.value === 0 ? (--tmpYear.value, tmpMonth.value = 11) : --tmpMonth.value : item.isNextMonth ? tmpMonth.value === 11 ? (++tmpYear.value, tmpMonth.value = 0) : ++tmpMonth.value : (tmpYear.value, tmpMonth.value);
      tmpDate.value = item.value;
      dateNumber.value = new Date(tmpYear.value, tmpMonth.value, tmpDate.value).getTime();
    }
    function isSelected(item) {
      let mon = tmpMonth.value;
      item.isPrevMonth && mon--;
      item.isNextMonth && mon++;
      let time = new Date(tmpYear.value, mon, item.value).setHours(0, 0, 0, 0);
      let f = new Date(dateNumber.value).setHours(0, 0, 0, 0);
      return time === f;
    }
    function isDisabled(item) {
      var _a;
      let mon = tmpMonth.value;
      item.isPrevMonth && mon--;
      item.isNextMonth && mon++;
      let time = new Date(tmpYear.value, mon, item.value);
      return ((_a = injectProps.disabledDate) == null ? void 0 : _a.call(injectProps, time)) || false;
    }
    function setValue() {
      let time = new Date(dateNumber.value);
      tmpYear.value = time.getFullYear();
      tmpMonth.value = time.getMonth();
      tmpDate.value = time.getDate();
    }
    vue.watch(
      () => show.value,
      (val) => {
        if (val) {
          dateNumber.value = props.date ? new Date(props.date).setHours(0, 0, 0, 0) : (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0);
          setValue();
        }
      }
    );
    __expose({ dateNumber });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.createElementVNode("div", _hoisted_2, [
          vue.createElementVNode("i", {
            class: "cu-icon-double-left",
            onClick: _cache[0] || (_cache[0] = ($event) => pannelType.value === "year" ? page.value-- : tmpYear.value--)
          }),
          pannelType.value === "date" ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 0,
            class: "cu-icon-left",
            onClick: prevMonth
          })) : vue.createCommentVNode("", true),
          vue.createElementVNode("div", _hoisted_3, [
            vue.withDirectives(vue.createElementVNode("span", { class: "not-hover" }, vue.toDisplayString(yearList.value[0] + "年-" + yearList.value[yearList.value.length - 1] + "年"), 513), [
              [vue.vShow, pannelType.value === "year"]
            ]),
            vue.withDirectives(vue.createElementVNode("span", {
              onClick: _cache[1] || (_cache[1] = ($event) => pannelType.value = "year")
            }, vue.toDisplayString(tmpYear.value + "年"), 513), [
              [vue.vShow, pannelType.value !== "year"]
            ]),
            vue.withDirectives(vue.createElementVNode("span", {
              onClick: _cache[2] || (_cache[2] = ($event) => pannelType.value = "month")
            }, vue.toDisplayString(tmpMonth.value + 1 + "月"), 513), [
              [vue.vShow, pannelType.value === "date"]
            ])
          ]),
          pannelType.value === "date" ? (vue.openBlock(), vue.createElementBlock("i", {
            key: 1,
            class: "cu-icon-right",
            onClick: nextMonth
          })) : vue.createCommentVNode("", true),
          vue.createElementVNode("i", {
            class: "cu-icon-double-right",
            onClick: _cache[3] || (_cache[3] = ($event) => pannelType.value === "year" ? page.value++ : tmpYear.value++)
          })
        ]),
        vue.createElementVNode("div", _hoisted_4, [
          vue.withDirectives(vue.createElementVNode("div", _hoisted_5, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(weeks.value, (week) => {
              return vue.openBlock(), vue.createElementBlock("span", { key: week }, vue.toDisplayString(weekForLang(week)), 1);
            }), 128))
          ], 512), [
            [vue.vShow, pannelType.value === "date"]
          ]),
          vue.withDirectives(vue.createElementVNode("div", _hoisted_6, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(dates.value, (weeks2, weeksIndex) => {
              return vue.openBlock(), vue.createElementBlock("div", { key: weeksIndex }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(weeks2, (day, index) => {
                  return vue.openBlock(), vue.createElementBlock("span", {
                    key: index,
                    class: vue.normalizeClass([
                      { "is-notcur": !day.isCurMonth },
                      { "is-disabled": isDisabled(day) },
                      { "is-selected": isSelected(day) }
                    ]),
                    onClick: ($event) => selectDay(day)
                  }, vue.toDisplayString(day.value), 11, _hoisted_7);
                }), 128))
              ]);
            }), 128))
          ], 512), [
            [vue.vShow, pannelType.value === "date"]
          ]),
          vue.withDirectives(vue.createElementVNode("div", _hoisted_8, [
            (vue.openBlock(), vue.createElementBlock(vue.Fragment, null, vue.renderList(11, (month) => {
              return vue.createElementVNode("div", {
                class: vue.normalizeClass({ "is-selected": month - 1 === tmpMonth.value }),
                onClick: ($event) => selectMonth(month - 1)
              }, vue.toDisplayString(monthForLang(month - 1) + "月"), 11, _hoisted_9);
            }), 64))
          ], 512), [
            [vue.vShow, pannelType.value === "month"]
          ]),
          vue.withDirectives(vue.createElementVNode("div", _hoisted_10, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(yearList.value, (year) => {
              return vue.openBlock(), vue.createElementBlock("div", {
                class: vue.normalizeClass({ "is-selected": year === tmpYear.value }),
                onClick: ($event) => selectYear(year)
              }, vue.toDisplayString(year), 11, _hoisted_11);
            }), 256))
          ], 512), [
            [vue.vShow, pannelType.value === "year"]
          ])
        ])
      ]);
    };
  }
});
exports.default = _sfc_main;

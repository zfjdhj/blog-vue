$(function () {
                            let lang = getLang();
                            let initialized = false;
                            showCurrentLang();
                            document.title = {
                                "cn": "明日方舟公开招募计算器",
                                "en": "Arknights Recruitment Recommender",
                                "jp": "明日方舟公开招募计算器"
                            }[lang];
                            let tags = [
                                {
                                    "cn": "资质", "cntags": ["新手", "资深干员", "高级资深干员"],
                                    "en": "Qualification", "entags": ["Starter", "Senior Operator", "Top Operator"],
                                    "jp": "资质", "jptags": ["新手", "资深干员", "高级资深干员"]
                                },
                                {
                                    "cn": "位置", "cntags": ["远程位", "近战位"],
                                    "en": "Position", "entags": ["Ranged", "Melee"],
                                    "jp": "位置", "jptags": ["远程位", "近战位"]
                                },
                                {
                                    "cn": "种类", "cntags": ["先锋干员", "狙击干员", "医疗干员", "术师干员", "近卫干员", "重装干员", "辅助干员", "特种干员"],
                                    "en": "Class", "entags": ["Vanguard", "Sniper", "Medic", "Caster", "Guard", "Defender", "Support", "Specialist"],
                                    "jp": "种类", "cntags": ["先锋干员", "狙击干员", "医疗干员", "术师干员", "近卫干员", "重装干员", "辅助干员", "特种干员"]
                                },
                                {
                                    "cn": "词缀", "cntags": ["治疗", "支援", "输出", "群攻", "减速", "生存", "防护", "削弱", "位移", "控场", "爆发", "召唤", "快速复活", "费用回复", "支援机械"],
                                    "en": "Affix", "entags": ["Healing", "Support", "DPS", "AoE", "Slow", "Survival", "Defense", "Debuff", "Shift", "Crowd Control", "Nuker", "Summoner", "Fast-Redeploy", "DP-Recovery", "Robot"],
                                    "jp": "词缀", "cntags": ["治疗", "支援", "输出", "群攻", "减速", "生存", "防护", "削弱", "位移", "控场", "爆发", "召唤", "快速复活", "费用回复", "支援机械"]
                                }
                            ];
                            $.each(tags, (_, v) => {
                                let row = '<tr><td><button class="btn btn-sm btn-info my-1" disabled>' + v[lang] + '</button></td><td>';
                                let tags_btn = []
                                for (let i = 0; i < v['cntags'].length; i++) {
                                    tags_btn.push('<button type="button" class="btn btn-sm btn-secondary btn-tag my-1" ' +
                                        (lang === 'cn' ? '' : ('data-toggle="tooltip" data-placement="top" title="' + v[lang + 'tags'][i] + '"'))
                                        + '>' + v['cntags'][i] + "</button>");
                                }
                                row += tags_btn.join("\r\n") + "</td></tr>";
                                $("#box-tags").append(row);
                            });
                            //if (lang !== 'cn') $('[data-toggle="tooltip"]').tooltip();
                            let tags_aval = {};
                            let all_chars = {};
                            let avg_char_tag = 0;
                            $.getJSON("/json/tool/mrfz/akhr.json", function (data) {
                                let tag_count = 0;
                                let char_tag_sum = 0;
                                // console.log(data);
                                $.each(data, function (_, char) {
                                    if (char.hidden) return;
                                    char.tags.push(char.type + "干员");
                                    let name = lang === 'cn' ? char.name : char["name-" + lang];
                                    $.each(char.tags, function (_, tag) {
                                        if (tag in tags_aval) {
                                            tags_aval[tag].push({ "name": name, "img": char["name-en"], "level": char.level, "type": char.type });
                                        } else {
                                            tags_aval[tag] = [{ "name": name, "img": char["name-en"], "level": char.level, "type": char.type }];
                                            tag_count++;
                                        }
                                        char_tag_sum++;
                                    });
                                    all_chars[name] = { 'level': char.level, 'tags': char.tags };
                                });
                                avg_char_tag = char_tag_sum / tag_count;
                            });
                            let showImage = getLocalStorage("hr-showImage", false);
                            let showName = getLocalStorage("hr-showName", true);
                            let imageSize = getLocalStorage("hr-imageSize",27);
                            function toggleBtnImage() {
                                $(".btn-image").toggleClass("btn-primary btn-secondary");
                                $(".btn-imgsize").removeClass("btn-primary btn-secondary").addClass("btn-secondary");
                                if ($(".btn-image").hasClass("btn-primary")) $(".btn-imgsize[sizeval=" + imageSize + "]").toggleClass("btn-primary btn-secondary");
                                showImage = $(".btn-image").hasClass("btn-primary");
                                setLocalStorage("hr-showImage", showImage);
                                setLocalStorage("hr-imageSize", imageSize);
                                if(initialized) calc();
                            }
                            function toggleBtnName() {
                                $(".btn-name").toggleClass("btn-primary btn-secondary");
                                showName = !showName;
                                setLocalStorage("ht-showName", showName);
                                if(initialized) calc();
                            }
                            if (showImage) { toggleBtnImage(); }
                            $(document).on("click", ".btn-name", toggleBtnName);
                            $(document).on("click", ".btn-image", toggleBtnImage);
                            $(document).on("click", ".btn-imgsize", function () {
                                if ($(this).hasClass("btn-primary")) {
                                    $(".btn-image").removeClass("btn-primary btn-secondary").addClass("btn-secondary");
                                    $(".btn-imgsize").removeClass("btn-primary btn-secondary").addClass("btn-secondary");
                                } else {
                                    imageSize = parseInt($(this).attr("sizeval"));
                                    $(".btn-image").removeClass("btn-primary btn-secondary").addClass("btn-primary");
                                    $(".btn-imgsize").removeClass("btn-primary btn-secondary").addClass("btn-secondary");
                                    $(this).toggleClass("btn-primary btn-secondary");
                                }
                                showImage = $(".btn-image").hasClass("btn-primary");
                                setLocalStorage("hr-showImage", showImage);
                                setLocalStorage("hr-imageSize", imageSize);
                                calc();
                            });
                            function calc() {
                                let len = checkedTags.length;
                                let count = Math.pow(2, checkedTags.length);
                                let combs = [];
                                for (let i = 0; i < count; i++) {
                                    let ts = [], tsTL = [];
                                    for (let j = 0, mask = 1; j < len; j++) {
                                        if ((i & mask) !== 0) {
                                            ts.push(checkedTags[j]);
                                            tsTL.push(checkedTagsTL[j]);
                                            // console.log(checkedTags[j]);
                                        }
                                        mask = mask * 2;
                                    }
                                    combs.push({ "tags": ts, "tagsTL": tsTL, "score": 0.0, "possible": [] });
                                }
                                // console.log(combs);
                                let optStars = [];
                                $(".btn-opt").each(function (_, __) {
                                    if ($(this).attr("opt-id") === "all" || $(this).hasClass("btn-secondary")) return;
                                    optStars.push($(this).attr("opt-id"));
                                });
                                //console.log(optStars);
                                $("#tbody-recommend").html("");
                                $.each(combs, function (_, comb) {
                                    let tags = comb.tags;
                                    if (tags.length === 0 || tags.length > 3) return;
                                    let chars = [...tags_aval[tags[0]]];
                                    for (let i = 1; i < tags.length; i++) {
                                        let reduced_chars = [];
                                        $.each(chars, function (_, char) {
                                            // console.log(tags_aval[tags[i]]);
                                            // console.log(char);
                                            $.each(tags_aval[tags[i]], function (_, tgch) {
                                                if (char.name === tgch.name) {
                                                    reduced_chars.push(char);
                                                    return false;
                                                }
                                            });
                                        });
                                        chars = reduced_chars;
                                    }
                                    if (chars.length === 0) return;
                                    if (!tags.includes("高级资深干员")) {
                                        // console.log(tags.join(",") + " 不含(高级)资深干员");
                                        let reduce6 = [];
                                        $.each(chars, function (_, char) {
                                            if (char.level !== 6) {
                                                reduce6.push(char);
                                            }
                                        });
                                        chars = reduce6;
                                    }
                                    let filtered_chars = [];
                                    $.each(chars, function (_, char) {
                                        //console.log(char.level);
                                        if (optStars.includes(char.level.toString())) {
                                            filtered_chars.push(char);
                                        }
                                    });
                                    chars = filtered_chars;
                                    comb.possible = chars;
                                    if (chars.length === 0) return;
                                    let s = 0;
                                    $.each(chars, (_, char) => {
                                        s += char.level;
                                    });
                                    s = s / chars.length;
                                    comb.score = s + 0.1 / tags.length + 0.9 / chars.length;
                                });
                                combs.sort(function (a, b) {
                                    return a.score > b.score ? -1 : (a.score < b.score ? 1 :
                                        (a.tags.length > b.tags.length ? 1 : (a.tags.length < b.tags.length ? -1 : 0)));
                                });
                                let no = 1;
                                $.each(combs, function (_, comb) {
                                    if (comb.possible.length === 0) return;
                                    let chars = comb.possible;
                                    let tags = comb.tags;
                                    let tagsTL = comb.tagsTL;
                                    let chars_html = [];
                                    let colors = { 1: "dark", 2: "light", 3: "success", 4: "info", 5: "warning", 6: "danger" };
                                    comb.possible.sort(function (a, b) {
                                        return a.level > b.level ? -1 : (a.level < b.level ? 1 : 0);
                                    });
                                    $.each(chars, function (_, char) {
                                        let padding = showName && imageSize < 60 ? "padding-right: 4px" : "padding-right: 1px";
                                        let style = showImage ? "style=\"border-radius: 5px;padding: 1px 1px;" + padding + ";\" " : "";
                                        let buttonstyle = imageSize > 25 ? "background-color: #AAA;border-radius: 4px;" : "background-color: transparent;border-radius: 4px;";
                                        chars_html.push("<button type=\"button\" class=\"btn btn-sm btn-" + colors[char.level] + " btn-char my-1 d-none d-sm-inline\" " + style + "title=\"" + char.name + "\">");
                                        if (showImage) chars_html.push("<img style=\"" + buttonstyle + "\"height=\"" + imageSize + "\" width=\"" + imageSize + "\" src=\"/images/chara/" + char.img + ".png\">   ");
                                        if (imageSize > 60) chars_html.push("<div>");
                                        if (showName) chars_html.push(char.name);
                                        if (imageSize > 60) chars_html.push("</div>");
                                        chars_html.push("</button>\n");
                                        chars_html.push("<button type=\"button\" class=\"btn btn-sm btn-" + colors[char.level] + " btn-char my-1 d-inline d-sm-none\" " + "title=\"" + char.name + "\">" + char.name + "</button>\n");
                                    });
                                    let tags_html = [];
                                    for (let i = 0; i < tags.length; i++) {
                                        if (lang === 'cn') {
                                            tags_html.push('<button type="button" class="btn btn-sm btn-secondary btn-char my-1">' +
                                                tags[i] + "</button>\n");
                                        } else {
                                            tags_html.push('<button type="button" class="btn btn-sm btn-secondary btn-char my-1' +
                                                ' btn-char my-1" data-toggle="tooltip" data-placement="top" title="' + tagsTL[i] + '">' +
                                                tags[i] + "</button>\n");
                                        }
                                    }
                                    $("#tbody-recommend").append(
                                        "<tr class=\"tr-recommd\">" +
                                        "<td class=\"py-2 d-none d-sm-table-cell\">" + no++ + "</td>" +
                                        "<td class=\"py-1\">" + tags_html.join("") + "</td><td class=\"py-1\">" + chars_html.join("") +
                                        "</td>" +
                                        "<td class=\"py-2 d-none d-sm-table-cell\">" + Math.floor(comb.score * 100) / 100 + "</td>" +
                                        "</tr>");
                                });
                                //if (lang !== 'cn') $('[data-toggle="tooltip"]').tooltip();
                            }
                            let hasHidden = false;
                            $(document).on("click", ".btn-char", function () {
                                if (!hasHidden) {
                                    let char_name = $(this).attr("title");
                                    $(".tr-recommd:not(:contains('" + char_name + "'))").hide();
                                    let char = all_chars[char_name];
                                    let colors = { 1: "dark", 2: "light", 3: "success", 4: "info", 5: "warning", 6: "danger" };
                                    let tags_html = [];
                                    $.each(char.tags, function (_, tag) {
                                        tags_html.push("<button type=\"button\" class=\"btn btn-sm btn-secondary btn-char my-1\">" +
                                            tag + "</button>\n")
                                    });
                                    $("#tbody-recommend").append(
                                        "<tr class=\"tr-chartag\">" +
                                        "<td class=\"py-2 d-none d-sm-table-cell\">#</td>" +
                                        "<td class=\"py-1\"><button type=\"button\" class=\"btn btn-sm btn-" + colors[char.level] +
                                        " btn-char my-1\">" + char_name + "</button>\n" +
                                        "</td><td class=\"py-1\">" + tags_html.join("") +
                                        "</td><td class=\"py-2 d-none d-sm-table-cell\">#</td></tr>");
                                } else {
                                    $(".tr-recommd").show();
                                    $(".tr-chartag").remove();
                                }
                                hasHidden = !hasHidden;
                            });
                            let checkedTags = [];
                            let checkedTagsTL = [];
                            $(document).on("click", ".btn-tag", function () {
                                let checked = $(this).hasClass("btn-primary");
                                let tag = $(this).text();
                                let tagTL = $(this).attr("data-original-title");
                                if (checked) {
                                    checkedTags = checkedTags.filter(function (v, _, __) {
                                        return v !== tag;
                                    });
                                    checkedTagsTL = checkedTagsTL.filter(function (v, _, __) {
                                        return v !== tagTL;
                                    });
                                } else {
                                    if (checkedTags.length >= 6) {
                                        alert({ "cn": "无法选择更多标签：最多6个。", "en": "No more tags: max 6." }[lang]);
                                        return;
                                    } else {
                                        checkedTags.push(tag);
                                        checkedTagsTL.push(tagTL);
                                    }
                                }
                                $(this).toggleClass("btn-primary btn-secondary");
                                calc();
                            });
                            $(document).on("click", ".btn-opt", function () {
                                $(this).toggleClass("btn-primary btn-secondary");
                                let checked = $(this).hasClass("btn-primary");
                                if ($(this).attr("id") === "opt-all") {
                                    $(".btn-opt").removeClass("btn-primary btn-secondary").addClass(
                                        checked ? "btn-primary" : "btn-secondary"
                                    );
                                } else {
                                    if ($("#opt-all").hasClass("btn-primary")) {
                                        $("#opt-all").toggleClass("btn-primary btn-secondary");
                                    } else {
                                        let checkedCount = 0;
                                        $(".btn-opt").each(function (_, __) {
                                            if ($(this).attr("id") === "opt-all") return;
                                            if ($(this).hasClass("btn-primary")) checkedCount++;
                                        });
                                        if (checkedCount === 6) $("#opt-all").toggleClass("btn-primary btn-secondary");
                                    }
                                }
                                calc();
                            });
                            $(document).on('click', '#btn-clear', function () {
                                $('.btn-tag').removeClass('btn-primary').addClass('btn-secondary');
                                $("#tbody-recommend").html("");
                                checkedTags = [];
                            });
                            initialized = true;
                            css();
                        });
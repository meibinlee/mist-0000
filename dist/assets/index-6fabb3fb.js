(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const i={"Content-Type":"application/json","Access-Control-Allow-Origin":"*"};function l(){fetch("/getPosts",i).then(t=>t.json()).then(t=>{document.getElementById("postList");const n=t.body;console.log(t),n.reverse().forEach(r=>{document.createElement("li")})}).catch(t=>{console.error("Error fetching posts:",t)})}function a(){fetch("/getTimetable",i).then(t=>t.json()).then(t=>{const n=document.getElementById("timetableList"),r=t.body;console.log(t);const e=["일요일","월요일","화요일","수요일","목요일","금요일","토요일"][new Date().getDay()],o=document.createElement("h2");o.textContent=e,n.appendChild(o),r.forEach(s=>{})}).catch(t=>{console.error("Error fetching timetable:",t)})}window.addEventListener("load",()=>{l(),a()});
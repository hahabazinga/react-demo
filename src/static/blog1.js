 const blog1 = `
### grid 布局
 1. Css
 \`\`\`
 body {
     height: 500px;
     display: grid;
     grid-template-columns: 40px 1fr; // fr分数单位，自动分配剩余空间
     grid-template-rows: 1fr 90px;
     grid-template-areas: "sidebar  content"
                          "footer  footer";
 }

 .main {
   grid-area: content;
   background-color: #2c3e50;
 }
 .footer {
   grid-area: footer;
   background-color: #c0392b;
 }
 .aside {
   grid-area: sidebar;
   background-color: #7f8c8d;

 \`\`\`
 2. 效果图
 
 ![效果图](https://github.com/hahabazinga/react-demo/blob/master/src/static/img/blog1_result.png?raw=true)
`
 export default blog1

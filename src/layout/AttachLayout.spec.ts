import {test} from 'ava';
import {
  AttachLayout
} from 'stepping';

test('should enable get first node position', t => {
  let layout = new AttachLayout();
  let parentNode = {x: 0, y: 0, width: 400, height: 300};
  let nodes = layout.calculateNodes(parentNode, [{id: 0, name: '库存已增加'}]);

  t.deepEqual(nodes, [{id: 0, name: '库存已增加', position: {x: 380, y: 280}}])
});

test('should enable get two node position', t => {
  let layout = new AttachLayout();
  let parentNode = {x: 0, y: 0, width: 400, height: 300};
  let nodes = layout.calculateNodes(parentNode, [{id: 0, name: '库存已增加'}, {id: 1, name: '库存已删除'}]);

  t.deepEqual(nodes, [
    {id: 0, name: '库存已增加', position: {x: 380, y: 280}},
    {id: 1, name: '库存已删除', position: {x: 380, y: -20}}])
});

test('should enable get three node position', t => {
  let layout = new AttachLayout();
  let parentNode = {x: 0, y: 0, width: 400, height: 300};
  let nodes = layout.calculateNodes(parentNode, [{id: 0, name: '库存已增加'}, {id: 1, name: '库存已删除'}, {id: 2, name: '库存已修改'}]);

  t.deepEqual(nodes, [
    {id: 0, name: '库存已增加', position: {x: 380, y: 280}},
    {id: 1, name: '库存已删除', position: {x: 380, y: -20}},
    {id: 2, name: '库存已修改', position: {x: 460 , y: 360}}])
});

test('should enable four three node position', t => {
  let layout = new AttachLayout();
  let parentNode = {x: 0, y: 0, width: 400, height: 300};
  let nodes = layout.calculateNodes(parentNode, [{id: 0, name: '库存已增加'}, {id: 1, name: '库存已删除'}, {id: 2, name: '库存已修改'}, {id: 3, name: '库存已修改2'}]);

  t.deepEqual(nodes, [
    {id: 0, name: '库存已增加', position: {x: 380, y: 280}},
    {id: 1, name: '库存已删除', position: {x: 380, y: -20}},
    {id: 2, name: '库存已修改', position: {x: 460 , y: 360}},
    {id: 3, name: '库存已修改2', position: {x: 460 , y: 60}}])
});

// test('should enable to render nodes', t => {
//   let layout = new AttachLayout();
//   let parentNode = {x: 0, y: 0, width: 400, height: 300};
//   let nodes = layout.calculateNodes(parentNode, [{id: 0, name: '库存已增加'}, {id: 1, name: '库存已删除'}]);
//   let results = layout.draw(nodes);
//
//   t.deepEqual(results, `<g>
//               <rect x=\"280\" y=\"360\" width=\"100\" height=\"100\" rx=\"2\" ry=\"2\" fill=\"#FFCC33\"/>
//               <text x=\"280\" y=\"360\" fill=\"#000\" text-anchor=\"middle\">
//                 <tspan dx=\"50\" dy=\"50\">库存已增加</tspan>
//               </text>
//             </g><g>
//               <rect x=\"280\" y=\"60\" width=\"100\" height=\"100\" rx=\"2\" ry=\"2\" fill=\"#FFCC33\"/>
//               <text x=\"280\" y=\"60\" fill=\"#000\" text-anchor=\"middle\">
//                 <tspan dx=\"50\" dy=\"50\">库存已删除</tspan>
//               </text>
//             </g>`)
// });
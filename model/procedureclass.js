module.exports = [
{
  "pNo": 0,
  "pName": "单位基本信息",
  "afamily": ['个体工农商户','电商服务点','工农商企业'],
  "pSuccess": [
    {inclose:true, gname:"indType", p:'主营业务', t:"industrytype", apdclist:require('./apd1.js'), apdvalue:[0, 0, 0] },
    {gname:"uName", p:'单位简称',t:"d2" },
    {gname: "nick", p: '单位简介', t: "d2"},
    {gname: "thumbnail", p: '图片简介', t: "thumb" },
    {gname: "address", p: '注册地', t: "ed"},
    {gname: "licenseNumber", p:'社会信用代码', t: "h3" }
  ],
  "puRoles": [],
  "pBewrite": "单位负责人提出岗位和单位设置或修改申请，提交单位或个人身份证明文件的照片，由电子商务服务公司进行审批。",
  "suRoles": [
    "32",
    "31"
  ],
  "pModle": "unitInfo"
},
{
  "pNo": 1,
  "pName": "单位实际控制人、股东、管理层变动",
  "afamily": ['实际控制人','股东','管理层'],
  "pSuccess": [
    {gname:"reportPeriod", p:'报告期',t:"rdate"},
    {gname: "address", p: '详细地址', t: "ed"},
    {gname: "licenseNumber", p:'社会信用代码', t: "h3" }
  ],
  "puRoles": [],
  "pBewrite": "单位负责人提出岗位和单位设置或修改申请，提交单位或个人身份证明文件的照片，由电子商务服务公司进行审批。",
  "suRoles": [
    "32",
    "31"
  ],
  "pModle": "unitRegistration"
},
{
  "pNo": 2,
  "pName": "资产负债表",
  "pSuccess": [
    {gname:"reportPeriod", p:'报告期',t:"rdate"},
    {gname:"a1 ", p:'流动资产',t:"d2" },
    {gname: "a2", p: '长期投资', t: "d2"},
    {gname: "a3", p: '固定资产', t: "d2"},
    {gname: "a4", p: '无形资产及其他资产', t: "d2" },
    {gname:"a5", p:'递延税款借项',t:"d2" },
    {gname: "l1 ", p: '流动负债', t: "d2" },
    {gname: "l2", p: '长期负债', t: "d2" },
    {gname:"l3", p:'递延税款贷项',t:"d2" },
    {gname:"c1", p:'实收资本净额',t:"d2" },
    {gname: "c2", p: '资本公积', t: "d2" },
    {gname: "c3", p: '盈余公积', t: "d2" },
    {gname:"c4", p:'未分配利润',t:"d2" }
  ],
  "puRoles": [
    "20",
    "admin"
  ],
  "pBewrite": "编写各类文章，经单位领导审批后发布。个人编写的此类文章由所属服务机构审批。",
  "suRoles": [
    "21",
    "20"
  ],
  "pModle": "quarterlyReports"
},
{
  "pNo": 3,
  "pName": "单位评价",
  "afamily":['产品管理','服务管理'],
  "pSuccess": [
    {gname: "uName", p:'名称', t:"h3" },
    {inclose: true, gname:"protype", p:'产品类别',t:"producttype", apdclist:[11301,11302,11303,11304,11305], apdvalue:[0, 0, 0] },
    {gname:"title", p:'简介',t:"p" },
    {gname:"desc", p:'描述',t:"p" },
    {gname:"thumbnail", p:'图片简介',t:"thumb" },
    {gname:"pics", p:'图片集',t:"pics"},
    {gname:"tvidio", p:'视频简介',t: "vidio" },
    {gname: "aGeoPoint", p: '地理位置', t: "chooseAd" },
    {gname: "address", p: '详细地址', t: "ed" },
    { gname:"PARM_content", p:'内容', t:"h4" },
    {gname:"PARM_additive", p:'附加', t:"h4" },
    { gname: "PARM_attention", p:'注意事项', t:"h4" },
    {gname:"PARM_period", p:'期限(天)', t:"dg" },
    {gname:"standard_code", p:'执行标准', t:"h4" },
    {gname:"license_no", p:'许可证号', t:"h4" },
    {gname:"details", p:'详情',t:"eDetail" }
  ],
  "pBewrite": "产品条线提出产品设置或修改申请，由产品条线负责人进行审批。",
  "puRoles": [
    "12",
    "11"
  ],
  "sFinallyRole": "12",
  "pModle": "product"
}
]

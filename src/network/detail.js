import {request} from './request'

export function getGoodDetailById(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
export class Goods{
  constructor(itemInfo,columns,services) {
    //标题
    this.title = itemInfo.title
    //描述
    this.desc = itemInfo.desc
    //当前价格
    this.newPrice = itemInfo.price
    //历史价格
    this.oldPrice = itemInfo.oldPrice
    //打折的描述信息
    this.discountDesc = itemInfo.discountDesc
    //打折描述信息的背景颜色
    this.discountBgColor = itemInfo.discountBgColor
    //销量和收藏的数组
    this.columns = columns
    //商品提供的服务数组
    this.services = services
    //最终价格/低
    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop{
  constructor(shopInfo){
    //logo
    this.logo = shopInfo.shopLogo
    //店铺名称
    this.name = shopInfo.name
    //店铺总销量
    this.sells = shopInfo.cSells
    //店铺宝贝数量
    this.goodsCount = shopInfo.cGoods
    //店铺评分数组
    this.score = shopInfo.score
  }
}
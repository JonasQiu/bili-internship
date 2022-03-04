// 头部显示
import logo from "../../assets/images/logo.png";
import { NavLink } from "dva/router";
import "../../assets/less/headerIndex.less";

const HeaderIndex = function (props: any) {
  return (
    <div>
      <div className="logo-wrapper">
        <div>
          <NavLink to="/">
            <img className="log-ptc" src={logo} alt="" />
          </NavLink>
        </div>
        <div>
            多功能播放器
        </div>
        <div>
            <button>点赞</button>
            <button>投币</button>
            <button onClick={()=>{
                alert('点击快捷键 ctrl  + D 加入到收藏夹~');
            }}>收藏</button>
        </div>
      </div>
      <div className="choose-player-wrapper">
        <select className="select-player" name="" id="">
          <option value="flv">flv</option>
          <option value="dash">dash</option>
          <option value="mp4">mp4</option>
        </select>
        <input className="url-input" placeholder="请输入播放链接" type="text" />
        <div className="more-btn">
          <button>加载</button>
          <button>停止加载</button>
          <button>复制链接</button>
        </div>
      </div>
    </div>
  );
};
export default HeaderIndex;

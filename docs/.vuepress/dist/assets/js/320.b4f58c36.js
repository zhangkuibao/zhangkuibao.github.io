(window.webpackJsonp=window.webpackJsonp||[]).push([[320],{970:function(v,_,t){"use strict";t.r(_);var a=t(12),e=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"本章要点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#本章要点"}},[v._v("#")]),v._v(" 本章要点")]),v._v(" "),t("ol",[t("li",[v._v("虚拟互连网络的概念。")]),v._v(" "),t("li",[v._v("IP 地址与物理地址的关系。")]),v._v(" "),t("li",[v._v("传统的 IP 地址分类和五分类域间路由选择 CIDR。")]),v._v(" "),t("li",[v._v("路由选择协议的工作原理。")])]),v._v(" "),t("h2",{attrs:{id:"摘要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#摘要"}},[v._v("#")]),v._v(" 摘要")]),v._v(" "),t("ol",[t("li",[v._v("TCP/IP 体系的网络层提供的是数据报服务。")]),v._v(" "),t("li",[v._v("网际协议 IP 是用来使互连起来的许多计算机网络能够进行通信的，因此 TCP/IP 体系中的网络层常常被称为网际层，以强调这是由很多网络构成的互连网络。")]),v._v(" "),t("li",[v._v("路由器其实就是一台专用计算机，用来在互联网中进行路由选择。")]),v._v(" "),t("li",[v._v("互联网可以由多种异构网络互连组成。")]),v._v(" "),t("li",[v._v("IP 地址指明一台主机和主机所在的网络。")]),v._v(" "),t("li",[v._v("实际上 IP 地址是标志一台主机（或路由器）和一条链路的接口。")]),v._v(" "),t("li",[v._v("路由器的每一个接口都有一个不同网络号的 IP 地址。")]),v._v(" "),t("li",[v._v("同样的 IP 地址和不同的子网掩码可以得到同样的结果，但是不同的子网掩码效果是不同的。")]),v._v(" "),t("li",[v._v("判断 IP 地址 A 和其他 IP 是否在同一个子网的方法：用其他 IP 的子网掩码与 A 做逐位与运算，如果得到的结果与 A 相同则说明在同一个子网下。")]),v._v(" "),t("li",[v._v("划分子网、CIDR 都是为了更有效地分配 IP 地址，也是为了延缓 IPV4 地址越来越少的形势。")])]),v._v(" "),t("h2",{attrs:{id:"实现网络互连的中间设备"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实现网络互连的中间设备"}},[v._v("#")]),v._v(" 实现网络互连的中间设备")]),v._v(" "),t("p",[v._v("根据中间设备所在的层次，可以有以下四种不同的设备：")]),v._v(" "),t("ul",[t("li",[v._v("物理层使用的中间设备叫转发器。")]),v._v(" "),t("li",[v._v("数据链路层使用的中间设备叫网桥或桥接器。")]),v._v(" "),t("li",[v._v("网络层使用的中间设备叫路由器。")]),v._v(" "),t("li",[v._v("在网络层以上使用的中间设备叫网关。在网关连接两个不兼容的系统需要再高层进行协议的转换。")])]),v._v(" "),t("p",[v._v("当中间设备是转发器或网桥时，仅仅是把一个网络扩大了，从网络层的角度看这仍是一个网络。")]),v._v(" "),t("p",[v._v("网关是一种充当转换器的计算机系统或设备，可以连接使用不同通信协议、数据格式甚至体系结构的两种系统。")]),v._v(" "),t("h2",{attrs:{id:"ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址"}},[v._v("#")]),v._v(" IP 地址")]),v._v(" "),t("h3",{attrs:{id:"ip-地址分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址分类"}},[v._v("#")]),v._v(" IP 地址分类")]),v._v(" "),t("p",[v._v("A、B、C 类地址都是单播地址，D 类地址用于多播，E 类地址为保留地址。")]),v._v(" "),t("p",[v._v("每个 IP 都由网络号和主机号组成，每个 IP 地址在整个互联网范围都是唯一的。")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"center"}},[v._v("网络类别")]),v._v(" "),t("th",{staticStyle:{"text-align":"center"}},[v._v("网络号位数/主机号位数")]),v._v(" "),t("th",{staticStyle:{"text-align":"center"}},[v._v("网络号头部值")]),v._v(" "),t("th",[v._v("可用网络数")]),v._v(" "),t("th",[v._v("可用 IP 数")])])]),v._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("A")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("8/24")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("0")]),v._v(" "),t("td",[v._v("2^7 - 2")]),v._v(" "),t("td",[v._v("2^24 - 2")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("B")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("16/16")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("10")]),v._v(" "),t("td",[v._v("2^14 - 1")]),v._v(" "),t("td",[v._v("2^16 - 2")])]),v._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"center"}},[v._v("C")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("24/8")]),v._v(" "),t("td",{staticStyle:{"text-align":"center"}},[v._v("110")]),v._v(" "),t("td",[v._v("2^21 - 1")]),v._v(" "),t("td",[v._v("2^8 - 2")])])])]),v._v(" "),t("h4",{attrs:{id:"a-类-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#a-类-ip-地址"}},[v._v("#")]),v._v(" A 类 IP 地址")]),v._v(" "),t("p",[v._v("用一个字节表示网络号，且网络号的第一位固定为 0。")]),v._v(" "),t("p",[v._v("可用的网络号为 7 位（前一位固定），可指派的网络号是 2^7 - 2（126，有两个特殊网段）。")]),v._v(" "),t("p",[v._v("可用的主机号为 24 位，可指派的主机号是 "),t("code",[v._v("2^24 - 2")]),v._v("（16777214,有"),t("a",{attrs:{href:"/document/%E8%AE%A1%E7%A1%95408/%E5%9F%BA%E7%A1%80%E7%BB%BC%E5%90%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89-%E8%B0%A2%E5%B8%8C%E4%BB%81/%E7%BD%91%E7%BB%9C%E5%B1%82?id=%e7%89%b9%e6%ae%8a%e4%b8%bb%e6%9c%ba%e5%8f%b7"}},[v._v("两个特殊主机号")]),v._v("）")]),v._v(" "),t("p",[v._v("可指派网段范围：1.0.0.0 - 126.0.0.0")]),v._v(" "),t("p",[t("strong",[v._v("A 类网的特殊网段")]),v._v("：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("0.1.2.3")]),v._v(" "),t("p",[v._v("网络号字段为全 0 的地址是个保留地址，代表“本网络”。")])]),v._v(" "),t("li",[t("p",[v._v("127.0.0.1")]),v._v(" "),t("p",[v._v("网络号为 127（01111111）的网段用作本地进程之间的通信。")])])]),v._v(" "),t("h4",{attrs:{id:"b-类-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#b-类-ip-地址"}},[v._v("#")]),v._v(" B 类 IP 地址")]),v._v(" "),t("p",[v._v("用两个字节表示网络号，且网络号的前两位为 10。")]),v._v(" "),t("p",[v._v("可用的网络号为 14 位（前两位固定），可指派的网络号是 "),t("code",[v._v("2^14 - 1")]),v._v("（16383，B 类 IP 网段从 128.1.0.0 开始分配，128.0.0.0 是不指派的）。")]),v._v(" "),t("p",[v._v("可用的主机号为 16 位，可指派的主机号为 "),t("code",[v._v("2^16 - 2")]),v._v("（65534，有"),t("a",{attrs:{href:"/document/%E8%AE%A1%E7%A1%95408/%E5%9F%BA%E7%A1%80%E7%BB%BC%E5%90%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89-%E8%B0%A2%E5%B8%8C%E4%BB%81/%E7%BD%91%E7%BB%9C%E5%B1%82?id=%e7%89%b9%e6%ae%8a%e4%b8%bb%e6%9c%ba%e5%8f%b7"}},[v._v("两个特殊主机号")]),v._v("）")]),v._v(" "),t("p",[v._v("可指派网段范围：128.1.0.0 - 191.255.0.0")]),v._v(" "),t("p",[t("strong",[v._v("B 类网的特殊网段")]),v._v("：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("128.0.0.0")]),v._v(" "),t("p",[v._v("此网段不指派。")])])]),v._v(" "),t("h4",{attrs:{id:"c-类-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#c-类-ip-地址"}},[v._v("#")]),v._v(" C 类 IP 地址")]),v._v(" "),t("p",[v._v("用三个字节表示网络号，且网络号的前三位为 110。")]),v._v(" "),t("p",[v._v("可用的网络号为 21 位（前三位固定），可指派的网络号是 2^21 - 1（2097151，B 类 IP 网段从 192.0.1.0 开始分配，192.0.0.0 是不指派的）。")]),v._v(" "),t("p",[v._v("可用的主机号为 8 位，可指派的主机号为 2^8 - 2（254，有"),t("a",{attrs:{href:"/document/%E8%AE%A1%E7%A1%95408/%E5%9F%BA%E7%A1%80%E7%BB%BC%E5%90%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89-%E8%B0%A2%E5%B8%8C%E4%BB%81/%E7%BD%91%E7%BB%9C%E5%B1%82?id=%e7%89%b9%e6%ae%8a%e4%b8%bb%e6%9c%ba%e5%8f%b7"}},[v._v("两个特殊主机号")]),v._v("）")]),v._v(" "),t("p",[v._v("可指派网段范围：192.0.1.0 - 223.255.255.0")]),v._v(" "),t("p",[t("strong",[v._v("C 类网的特殊网段")]),v._v("：")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("192.0.0.0")]),v._v(" "),t("p",[v._v("此网段不指派。")])])]),v._v(" "),t("h4",{attrs:{id:"d-类-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#d-类-ip-地址"}},[v._v("#")]),v._v(" D 类 IP 地址")]),v._v(" "),t("p",[v._v("网络号的前四位为 1110。")]),v._v(" "),t("h4",{attrs:{id:"e-类-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#e-类-ip-地址"}},[v._v("#")]),v._v(" E 类 IP 地址")]),v._v(" "),t("p",[v._v("网络号的前四位为 1111。")]),v._v(" "),t("h4",{attrs:{id:"特殊主机号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特殊主机号"}},[v._v("#")]),v._v(" 特殊主机号")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("1.0.0.0")]),v._v(" "),t("p",[v._v("全 0 的主机号表示该 IP 地址是本主机所连接的网络地址，如一主机 IP 地址为 5.6.7.8，则该主机所在的网络地址就是 5.0.0.0。")])]),v._v(" "),t("li",[t("p",[v._v("1.255.255.255")]),v._v(" "),t("p",[v._v("全 1 的主机号表示该网络上的所有主机。")])])]),v._v(" "),t("h3",{attrs:{id:"ip-地址的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址的特点"}},[v._v("#")]),v._v(" IP 地址的特点")]),v._v(" "),t("p",[v._v("IP 地址是一种分等级的地址结构，这样的好处是：")]),v._v(" "),t("ul",[t("li",[v._v("IP 地址管理机构在分配 IP 时只分配网络号，主机号由获得该网络号的单位自行分配。")]),v._v(" "),t("li",[v._v("路由器仅根据目的主机所连接的网络号来转发分组，这样就减少了路由表所占的内存和查找路由表的时间。")]),v._v(" "),t("li",[v._v("多归属主机：当一台主机同时连接到两个网络上时，该主机就必须同时拥有两个相应的 IP 地址，其网络号必须是不同的。")]),v._v(" "),t("li",[v._v("一个网络是指具有相同网络号的主机的集合，因此用转发器或网桥连接起来的若干个局域网仍为一个网络；因为这些局域网都有相同的网络号。")])]),v._v(" "),t("h3",{attrs:{id:"ip-地址和硬件地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-地址和硬件地址"}},[v._v("#")]),v._v(" IP 地址和硬件地址")]),v._v(" "),t("p",[v._v("硬件地址是数据链路层和物理层使用的地址，IP 地址是网络层及更高层使用的地址。")]),v._v(" "),t("h4",{attrs:{id:"地址解析协议-arp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#地址解析协议-arp"}},[v._v("#")]),v._v(" 地址解析协议 ARP")]),v._v(" "),t("p",[v._v("网络层在下发数据报后数据链路层需要知道要把这个数据报发送到什么地方，也就是需要知道目标主机的 MAC 地址。")]),v._v(" "),t("p",[v._v("ARP 协议就是通过在缓存中存放一个从 IP 地址到硬件地址的映射表来保存 IP 地址到 MAC 地址的映射。")]),v._v(" "),t("p",[v._v("ARP 是解决同一个局域网上的主机或路由器的 IP 地址和硬件地址的映射问题。")]),v._v(" "),t("h3",{attrs:{id:"分组转发算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分组转发算法"}},[v._v("#")]),v._v(" 分组转发算法")]),v._v(" "),t("ol",[t("li",[v._v("从数据报的首部提取目的主机的 IP，根据目的 IP 得到目的网段。")]),v._v(" "),t("li",[v._v("若该网段就是当前路由器接入的网段，则直接交付，否则执行 3。")]),v._v(" "),t("li",[v._v("若路由表中有目的主机 IP 的特定主机路由，则把数据报传送给这个指定的路由器，否则执行 4。")]),v._v(" "),t("li",[v._v("若路由表中有到达目标网段的路由，则把数据报传送给路由表中指明的下一跳路由，否则执行 5。")]),v._v(" "),t("li",[v._v("若路由表中有一个默认路由，则把数据报传送给默认路由器，否则执行 6。")]),v._v(" "),t("li",[v._v("报告转发分组出错。")])]),v._v(" "),t("h2",{attrs:{id:"划分子网"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#划分子网"}},[v._v("#")]),v._v(" 划分子网")]),v._v(" "),t("p",[v._v("子网将原本的两级 IP 地址（网络号+主机号）变成了三级 IP 地址（网络号+主机号+子网号），扩大了 IP 地址的数量。")]),v._v(" "),t("p",[v._v("划分子网是单位内部的事情，本单位以外的网络看不见这个网络是由多少个子网组成，这个单位对外仍表现为一个网络。")]),v._v(" "),t("p",[v._v("凡事从其他网络发送到本单位某主机的 IP 数据报，仍然是根据 IP 地址的目的网络号找到"),t("strong",[v._v("连接在本单位网络上的路由器")]),v._v("，但此路由器在收到 IP 数据报后，则按照目的网络号和子网号找到目的子网，把 IP 数据报交付到对应子网的目标主机。")]),v._v(" "),t("p",[v._v("一个 B 类 IP 地址 "),t("code",[v._v("145.13.3.10")]),v._v("，它的网络号为 "),t("code",[v._v("145.13")]),v._v("，主机号为 "),t("code",[v._v("3.10")]),v._v("；如果将 "),t("code",[v._v("145.13.3.0")]),v._v(" 作为一个子网，那么 "),t("code",[v._v("10")]),v._v(" 就是这个 IP 的主机号，"),t("code",[v._v("3")]),v._v(" 则是它的子网号。")]),v._v(" "),t("h3",{attrs:{id:"划分子网的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#划分子网的方法"}},[v._v("#")]),v._v(" 划分子网的方法")]),v._v(" "),t("p",[v._v("从 IP 地址的主机号借用若干位作为子网号，其余位仍是主机号。")]),v._v(" "),t("p",[v._v("子网号不能为全 0 或全 1（随着无分类域间路由的广泛使用，全 0 和全 1 的子网号也可以使用了）。")]),v._v(" "),t("p",[v._v("一个 B 类 IP 地址 "),t("code",[v._v("145.13.0.0")]),v._v("，它的主机号有十六位（二进制），如果把前两位作为子网位："),t("code",[v._v("11000000 00000000")]),v._v("，它的主机位就是后面的十四位。可能的子网号为 "),t("code",[v._v("10")]),v._v(" 和 "),t("code",[v._v("01")]),v._v("（不能全 0 或全 1），可拥有的主机数为 2^14 - 2（两个"),t("a",{attrs:{href:"/document/%E8%AE%A1%E7%A1%95408/%E5%9F%BA%E7%A1%80%E7%BB%BC%E5%90%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89-%E8%B0%A2%E5%B8%8C%E4%BB%81/%E7%BD%91%E7%BB%9C%E5%B1%82?id=%e7%89%b9%e6%ae%8a%e4%b8%bb%e6%9c%ba%e5%8f%b7"}},[v._v("两个特殊主机号")]),v._v("）")]),v._v(" "),t("p",[v._v("通过不断增加分配给子网号的位数就能划分更多的子网，子网数和主机数成反比。")]),v._v(" "),t("p",[v._v("子网数是根据子网号计算出来的：若子网号有 n 位，则共有 2^n 种可能的排列，除去全 0 和全 1 这两种情况，就可得出可用的子网数。")]),v._v(" "),t("h3",{attrs:{id:"子网掩码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子网掩码"}},[v._v("#")]),v._v(" 子网掩码")]),v._v(" "),t("p",[v._v("子网掩码用来判断子网号。原本的 IP 地址中没有存放子网号的位置，因此只能通过其他方式解决。")]),v._v(" "),t("p",[v._v("子网掩码也是由 32 位的二进制数组成，与 IP 地址的二进制位数一一对应，子网掩码中每一位的 1 代表 IP 中的"),t("strong",[v._v("网络位和子网位")]),v._v("，0 则代表"),t("strong",[v._v("主机位")]),v._v("。")]),v._v(" "),t("p",[v._v("一个 B 类 IP 地址 "),t("code",[v._v("145.13.129.10")]),v._v("，它的二进制数为：")]),v._v(" "),t("p",[t("code",[v._v("10010001 00001101 10000001 00001010")])]),v._v(" "),t("p",[v._v("当它的子网掩码为：")]),v._v(" "),t("p",[t("code",[v._v("11111111 11111111 00000000 00000000")])]),v._v(" "),t("p",[v._v("则代表该 IP 没有划分子网（B 类网前十六位为网络号），它的主机号就是后面十六位 "),t("code",[v._v("10000001 00001010")])]),v._v(" "),t("p",[v._v("当它的子网掩码为：")]),v._v(" "),t("p",[t("code",[v._v("11111111 11111111 11000000 00000000")])]),v._v(" "),t("p",[v._v("这时代表该 IP 将前两位作为子网号划分子网，原本主机号的前两位表示子网号，后面十四位代表主机号，此时子网号为 "),t("code",[v._v("10000000")]),v._v("，主机号为 "),t("code",[v._v("000001 00001010")]),v._v("。")]),v._v(" "),t("h3",{attrs:{id:"加入子网掩码之后的分组转发算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#加入子网掩码之后的分组转发算法"}},[v._v("#")]),v._v(" 加入子网掩码之后的分组转发算法")]),v._v(" "),t("ol",[t("li",[v._v("从数据报的首部提取目的主机的 IP。")]),v._v(" "),t("li",[v._v("先判断是否为直接交付："),t("strong",[v._v("用各网的子网掩码和目的 IP 进行逐位与操作，如果得到的结果和目标 IP 一致则代表在同一子网下")]),v._v("，直接交付，否则就是间接交付，执行 3。")]),v._v(" "),t("li",[v._v("若路由表中有目的主机 IP 的特定主机路由，则把数据报传送给这个指定的路由器，否则执行 4。")]),v._v(" "),t("li",[v._v("对路由表中的每一行，"),t("strong",[v._v("用每一行的子网掩码和目的 IP 进行逐位与操作，如果得到的结果和目标 IP 一致则代表在同一子网下")]),v._v("，则把数据报传送给路由表中指明的下一跳路由，否则执行 5。")]),v._v(" "),t("li",[v._v("若路由表中有一个默认路由，则把数据报传送给默认路由器，否则执行 6。")]),v._v(" "),t("li",[v._v("报告转发分组出错。")])]),v._v(" "),t("h3",{attrs:{id:"无分类域间路由选择-cidr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#无分类域间路由选择-cidr"}},[v._v("#")]),v._v(" 无分类域间路由选择 CIDR")]),v._v(" "),t("p",[v._v("无分类域间路由选择（CIDR，Classless Inter-Domain Routing）也叫"),t("strong",[v._v("无分类编址")]),v._v("，使用 CIDR 后网络的划分不再按照传统的 A、B、C 类，而是按照 IP 地址中网络位的数量来划分网络。")]),v._v(" "),t("p",[v._v("CIDR 把网络前缀都相同的连续的 IP 地址组成一个 "),t("code",[v._v("CIDR 地址块")]),v._v("，我们只要知道地址块中的任何一个地址，就能知道这个地址块的起始地址以及地址块中的地址数。")]),v._v(" "),t("p",[v._v("网络前缀越短，其地址块包含的地址数就越多。")]),v._v(" "),t("h4",{attrs:{id:"cidr-的作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cidr-的作用"}},[v._v("#")]),v._v(" CIDR 的作用")]),v._v(" "),t("p",[v._v("CIDR 消除了传统的 A 类、B 类和 C 类地址及划分子网的概念，能更有效地分配 IPV4 地址。")]),v._v(" "),t("p",[v._v("可以从 IP 地址中得到更多的信息，如 "),t("code",[v._v("192.199.170.82/27")]),v._v("，从 IP 地址中可知它的网络位有 27 位，可分配的 IP 为 "),t("code",[v._v("2^5")]),v._v(" 个，同时也可通过计算得出这个地址块的最小地址和最大地址。")]),v._v(" "),t("p",[v._v("减少路由表的大小，一个 "),t("code",[v._v("CIDR 地址块")]),v._v("中有很多地址，所以在路由表中就利用 CIDR 地址块来查找目的网络。这种地址的聚合常称为"),t("strong",[v._v("路由聚合")]),v._v("，也称为"),t("strong",[v._v("构成超网")]),v._v("。它使得路由表中的一个项目可以表示原来传统分类地址的很多个路由。路由聚合有利于减少路由器之间的路由选择信息的交换，从而提高了整个互联网的性能。")]),v._v(" "),t("h4",{attrs:{id:"cidr-如何划分网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cidr-如何划分网络"}},[v._v("#")]),v._v(" CIDR 如何划分网络")]),v._v(" "),t("p",[v._v("CIDR 的做法是将 32 位 IP 地址分为前后两个部分，前面部分是网络地址，后面部分是主机地址。")]),v._v(" "),t("p",[v._v("CIDR 采用斜线记法，在 IP 地址后面用斜杠 "),t("code",[v._v("/")]),v._v(" 写上网络地址所占的位数。")]),v._v(" "),t("h2",{attrs:{id:"网际控制报文协议-icmp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网际控制报文协议-icmp"}},[v._v("#")]),v._v(" 网际控制报文协议 ICMP")]),v._v(" "),t("p",[t("code",[v._v("ICMP")]),v._v(" 允许主机或路由器报告差错情况和提供有关异常情况的报告。")]),v._v(" "),t("p",[t("code",[v._v("ICMP 报文")]),v._v("是在 "),t("code",[v._v("IP 数据报")]),v._v("中，作为其中的"),t("strong",[v._v("数据部分")]),v._v("被传输。")]),v._v(" "),t("h3",{attrs:{id:"icmp-的应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#icmp-的应用"}},[v._v("#")]),v._v(" ICMP 的应用")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("PING（Packet InterNet Groper）")]),v._v(" "),t("p",[v._v("用来测试两台主机之间的连通性。")])]),v._v(" "),t("li",[t("p",[v._v("跟踪路由")]),v._v(" "),t("p",[v._v("tracert 命令（windows）可以用来跟踪一个分组从源点到终点的路径。")])])]),v._v(" "),t("h3",{attrs:{id:"ttl-time-to-live"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ttl-time-to-live"}},[v._v("#")]),v._v(" TTL（Time To Live）")]),v._v(" "),t("p",[v._v("表示 ICMP 包的转发次数（跳数）。")]),v._v(" "),t("h2",{attrs:{id:"疑问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#疑问"}},[v._v("#")]),v._v(" 疑问")]),v._v(" "),t("h3",{attrs:{id:"路由器怎么知道如何跳到目标主机所在的网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由器怎么知道如何跳到目标主机所在的网络"}},[v._v("#")]),v._v(" 路由器怎么知道如何跳到目标主机所在的网络？")]),v._v(" "),t("p",[v._v("IP 数据报中只保存目标 IP 地址，而没有如何去到目标 IP 的每一步路由信息。路由器在收到 IP 数据报时根据目标 IP 所在的网段查询路由表，如果能得到下一跳的路由（缓存、指定或默认）就转发数据报，否则就报错。")]),v._v(" "),t("p",[t("a",{attrs:{href:"/document/%E8%AE%A1%E7%A1%95408/%E5%9F%BA%E7%A1%80%E7%BB%BC%E5%90%88/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%EF%BC%88%E7%AC%AC7%E7%89%88%EF%BC%89-%E8%B0%A2%E5%B8%8C%E4%BB%81/%E7%BD%91%E7%BB%9C%E5%B1%82?id=%e5%88%86%e7%b5%84%e8%bd%ac%e5%8f%91%e7%ae%97%e6%b3%95"}},[v._v("分組转发算法")])]),v._v(" "),t("h3",{attrs:{id:"公司内部有多个主机-这些主机访问互联网的-ip-地址都是统一的吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#公司内部有多个主机-这些主机访问互联网的-ip-地址都是统一的吗"}},[v._v("#")]),v._v(" 公司内部有多个主机，这些主机访问互联网的 IP 地址都是统一的吗？")])])}),[],!1,null,null,null);_.default=e.exports}}]);
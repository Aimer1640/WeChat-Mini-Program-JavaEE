/*
Navicat MySQL Data Transfer

Source Server         : exp
Source Server Version : 50740
Source Host           : localhost:3306
Source Database       : work

Target Server Type    : MYSQL
Target Server Version : 50740
File Encoding         : 65001

Date: 2023-01-12 22:42:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tb_admin
-- ----------------------------
DROP TABLE IF EXISTS `tb_admin`;
CREATE TABLE `tb_admin` (
  `account` varchar(30) NOT NULL COMMENT '管理员名字',
  `password` varchar(16) NOT NULL COMMENT '密码',
  PRIMARY KEY (`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of tb_admin
-- ----------------------------
INSERT INTO `tb_admin` VALUES ('101', '8f\'GjpNR');
INSERT INTO `tb_admin` VALUES ('1011', 'ZVae?|');
INSERT INTO `tb_admin` VALUES ('111', 'iQI{ph');
INSERT INTO `tb_admin` VALUES ('123', ' ,bY[K-#Kp');

-- ----------------------------
-- Table structure for tb_order
-- ----------------------------
DROP TABLE IF EXISTS `tb_order`;
CREATE TABLE `tb_order` (
  `id` char(2) NOT NULL,
  `sigthname` varchar(255) DEFAULT NULL,
  `customname` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `num` varchar(255) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of tb_order
-- ----------------------------
INSERT INTO `tb_order` VALUES ('1', '魔法城堡', 'Aimer', '已购票', '3', 'https://thirdwx.qlogo.cn/mmopen/vi_32/jpRia98bOeHg9KBsSX1Hyo0nj0hpqToc8tD1kWXUDDUDVzwrGxoPicG5n9A1vibsibOXibqx7NfQvgneQYkKHB2OzibA/132');
INSERT INTO `tb_order` VALUES ('14', '急流勇进', 'Aimer', '已购票', '33', 'https://thirdwx.qlogo.cn/mmopen/vi_32/jpRia98bOeHg9KBsSX1Hyo0nj0hpqToc8tD1kWXUDDUDVzwrGxoPicG5n9A1vibsibOXibqx7NfQvgneQYkKHB2OzibA/132');
INSERT INTO `tb_order` VALUES ('27', '自由落体', 'Aimer', '已购票', '2', 'https://thirdwx.qlogo.cn/mmopen/vi_32/jpRia98bOeHg9KBsSX1Hyo0nj0hpqToc8tD1kWXUDDUDVzwrGxoPicG5n9A1vibsibOXibqx7NfQvgneQYkKHB2OzibA/132');
INSERT INTO `tb_order` VALUES ('53', 'U型滑板', 'Aimer', '已购票', '23', 'https://thirdwx.qlogo.cn/mmopen/vi_32/jpRia98bOeHg9KBsSX1Hyo0nj0hpqToc8tD1kWXUDDUDVzwrGxoPicG5n9A1vibsibOXibqx7NfQvgneQYkKHB2OzibA/132');
INSERT INTO `tb_order` VALUES ('54', '旋转木马', 'Aimer', '已购票', '12', 'https://thirdwx.qlogo.cn/mmopen/vi_32/jpRia98bOeHg9KBsSX1Hyo0nj0hpqToc8tD1kWXUDDUDVzwrGxoPicG5n9A1vibsibOXibqx7NfQvgneQYkKHB2OzibA/132');
INSERT INTO `tb_order` VALUES ('58', 'U型滑板', 'Aimer', '已购票', '33', 'https://thirdwx.qlogo.cn/mmopen/vi_32/jpRia98bOeHg9KBsSX1Hyo0nj0hpqToc8tD1kWXUDDUDVzwrGxoPicG5n9A1vibsibOXibqx7NfQvgneQYkKHB2OzibA/132');
INSERT INTO `tb_order` VALUES ('74', '旋转木马', 'Aimer', '已购票', '11', 'https://thirdwx.qlogo.cn/mmopen/vi_32/jpRia98bOeHg9KBsSX1Hyo0nj0hpqToc8tD1kWXUDDUDVzwrGxoPicG5n9A1vibsibOXibqx7NfQvgneQYkKHB2OzibA/132');
INSERT INTO `tb_order` VALUES ('8', '欢乐摩天轮', 'Aimer', '已购票', '11', 'https://thirdwx.qlogo.cn/mmopen/vi_32/jpRia98bOeHg9KBsSX1Hyo0nj0hpqToc8tD1kWXUDDUDVzwrGxoPicG5n9A1vibsibOXibqx7NfQvgneQYkKHB2OzibA/132');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('101', '101');

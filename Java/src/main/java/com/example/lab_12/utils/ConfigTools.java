package com.example.lab_12.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

/**
 * ��װ���ݿ����ӹ����ࣨ��������ģʽ��
 * @author 
 *
 */
public class ConfigTools {
	/**
	 * 
	 * @param args
	 */
	//ע���������ĸ�ֵ˳����ΪConfigTools ct = new ConfigTools()�ǵ�����new����ʱ��͹��췽��ֻ����һ�Σ���Properties pro = null���ǣ����ٴν�pro��ֵ����null�����¿�ָ���쳣
	static Properties pro = null;
	
	static ConfigTools ct = new ConfigTools();
	
	
	
	public ConfigTools() {
		pro = new Properties();
		InputStream is = ConfigTools.class.getClassLoader().getResourceAsStream("db.properties");
		try {
			pro.load(is);
		} catch (IOException e) {
			e.printStackTrace();
		}	
	}
	
	public static Properties getProperties() {
		return pro;
	}
	
//	public static String getProperties(String key) {
//		return pro.getProperty(key);
//	}

	public static void main(String[] args) {
		System.out.println(pro.getProperty("url"));
	}
}

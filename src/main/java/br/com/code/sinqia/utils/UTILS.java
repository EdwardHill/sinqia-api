package br.com.code.sinqia.utils;

import java.math.BigDecimal;
import java.text.ParseException;
import java.util.Random;

import javax.swing.text.MaskFormatter;

public class UTILS {
	public static Random rand = new Random();
	public static String formatCEP(String value) {

		String pattern = "#####-###";

		MaskFormatter mf;
		try {
			mf = new MaskFormatter(pattern);
			mf.setValueContainsLiteralCharacters(false);
			return mf.valueToString(value);
		} catch (ParseException ex) {
			return value;
		}
	}

	public static String formatFhone(String value) {

		String patternCEL = "#####-####";
		String patternFHONE = "####-####";

		MaskFormatter mf;
		try {

			if (value.length() < 7) {
				mf = new MaskFormatter(patternFHONE);
			} else {
				mf = new MaskFormatter(patternCEL);
			}

			mf.setValueContainsLiteralCharacters(false);
			return mf.valueToString(value);
		} catch (ParseException ex) {
			return value;
		}
	}

	public static BigDecimal round(double value) {

		BigDecimal bd = new BigDecimal(value);
		// bd.setScale(2, BigDecimal.ROUND_HALF_UP); bd.setScale does not change bd
		bd = bd.setScale(2, BigDecimal.ROUND_HALF_UP);
		System.out.println(bd);

		return bd;

	}

	public UTILS() {
		// TODO Auto-generated constructor stub
	}
	/*
	public static void  aplicaDesconto(CheckoutGenerico dadosPayment) {
	 BigDecimal subTotal = new BigDecimal(dadosPayment.getItems()[0].getAmount());
	 if(dadosPayment.getExtraAmount().equals(null)) {
		 dadosPayment.setExtraAmount("0");
	 }
		 
	 BigDecimal discountPercent = new BigDecimal(dadosPayment.getExtraAmount());
	 
	 BigDecimal discountAmount = subTotal.multiply(discountPercent);
	 discountAmount = discountAmount.setScale(2, RoundingMode.HALF_UP);
	 BigDecimal total =subTotal.subtract(discountAmount);
		
	dadosPayment.getItems()[0].setAmount(total.toPlainString());	
	}
	
	public static BigDecimal impostoSplitSec(CheckoutGenerico dadosPayment, Curso curso) {	
		BigDecimal amount = new BigDecimal(dadosPayment.getItems()[0].getAmount());
		BigDecimal comissao = amount.multiply(curso.getProdutor().getImpostoPorVenda());
		return comissao;
	}

		*/
	
	
	



	public static String randomChars() {
		char[] vet = new char[5];
		for (int i = 0; i < 5; i++) {
			vet[i] = randomChar();
		}
		return new String(vet);
	}

	public static char randomChar() {
		int opt = rand.nextInt(3);
		if (opt == 0) { // gera um digito
			return (char) (rand.nextInt(10) + 48);
		} else if (opt == 1) { // gera letra maiuscula
			return (char) (rand.nextInt(26) + 65);
		} else { // gera letra minuscula
			return (char) (rand.nextInt(26) + 97);
		}
	}
	

}

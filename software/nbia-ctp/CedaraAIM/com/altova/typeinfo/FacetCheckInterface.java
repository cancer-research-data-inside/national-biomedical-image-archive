/*L
 *  Copyright SAIC, Ellumen and RSNA (CTP)
 *
 *
 *  Distributed under the OSI-approved BSD 3-Clause License.
 *  See http://ncip.github.com/national-biomedical-image-archive/LICENSE.txt for details.
 */

// FacetCheckInterface.java 
// This file contains generated code and will be overwritten when you rerun code generation.

package com.altova.typeinfo;

public interface FacetCheckInterface
{
	public static final int FacetCheckResult_Fail = 0;
	public static final int FacetCheckResult_Success = 1;
	public static final int FacetCheckResult_EnumFail = 2;
	public static final int FacetCheckResult_EnumSuccess = 3;
		
	int check(String value, FacetInfo facet, int whitespaceNormalization);
}

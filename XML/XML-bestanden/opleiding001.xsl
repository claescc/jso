<?xml version="1.0"?>
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method= "text" indent="yes"/>
    <!-- output -->
    <xsl:template match="/opleiding">
        <!-- root -->
        <xsl:text>Overzicht deelnemers van opleiding&#32;</xsl:text>
        <xsl:value-of select="titel" />
        <xsl:for-each select="deelnemers/deelnemer">  <!-- elke deelnemer -->
            <xsl:sort select="."/> <!-- sort op persoon -->
            <xsl:text>&#xA;</xsl:text>
            <xsl:apply-templates select="."/>
        </xsl:for-each>
    </xsl:template>
    <xsl:template match="deelnemer">
        <xsl:value-of select="."></xsl:value-of>
    </xsl:template>
</xsl:stylesheet>



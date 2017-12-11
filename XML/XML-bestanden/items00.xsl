<?xml version="1.0"?>
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml"/>
    <!-- output -->
    <xsl:template match="/items"> <!-- root -->
        <CDoverzicht>
            <xsl:for-each select="item"> <!-- sort op item -->
                <xsl:sort select="omschrijving"/><!-- sort op category -->
                <xsl:if test="categorie ='CD'">  <!-- voorwaarden: if test=" > 2" (grooterdanteken!) -->
               <CD>
                  <xsl:apply-templates select="omschrijving" />
                 </CD>
                </xsl:if> 
            </xsl:for-each>
        </table>
    </xsl:template>
    <xsl:template match="categorie">
        <xsl:value-of select="."></xsl:value-of>
    </xsl:template>
</xsl:stylesheet>



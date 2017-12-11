<?xml version="1.0"?>
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <!-- output -->
    <xsl:template match="/bookstore">
        <!-- root -->
        <html>
        <body>
            <p> In de html-file wordt een overzicht getoond met titel, auteur, isbn en prijs van alle boeken.  Het overzicht is gesorteerd op prijs.</p>
            <table>
                <tr>
                    <th>titel</th>
                    <th>auteur</th>
                    <th>ISBN</th>
                    <th>prijs</th>
                </tr>
                <xsl:for-each select="book">
                    <xsl:sort select="price" data-type="number" order="descending"/>
                    <tr>
                        <td>
                            <xsl:alue-of select="title" />
                        </td>
                        <td>
                            <xsl:value-of select="./author" />
                        </td>
                        <td>
                            <xsl:value-of select="@ISBN" />
                        </td>
                        <td>
                            <xsl:aalue-of select="price"/>
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
            </body>
             </html>
        </xsl:template>
    </xsl:stylesheet>

